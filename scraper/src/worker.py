""" Defines a worker that subscribes to instrument IDs sent over RabbitMQ and either fetches
quotes, popularity, or stores the ID in a database. """


import datetime, hmac, base64, struct, hashlib, time
from functools import reduce
from json.decoder import JSONDecodeError
from pprint import pprint
from os import environ

import click
import pika
import pymongo
from pymongo.errors import BulkWriteError
import requests

from Robinhood import Robinhood, endpoints
from Robinhood.exceptions import InvalidTickerSymbol

from common import parse_throttle_res
from db import get_db, set_popularities_finished, set_quotes_finished, unlock_cache
from utils import (
    parse_instrument_url,
    build_instrument_url,
    parse_updated_at,
    pluck,
    DESIRED_QUOTE_KEYS,
    omit,
)

INDEX_COL = get_db()["index"]

TRADER = Robinhood()


def store_popularities(popularity_map: dict, collection: pymongo.collection.Collection):
    """ Creates an entry in the database for the popularity. """

    timestamp = datetime.datetime.utcnow()
    pprint(popularity_map)
    mapped_documents = map(
        lambda key: {
            "timestamp": timestamp,
            "instrument_id": key,
            "popularity": popularity_map[key],
        },
        popularity_map.keys(),
    )

    collection.insert_many(mapped_documents)


def store_quotes(quotes: list, collection: pymongo.collection.Collection):
    """ Creates entries in the database for the provided quotes. """

    def map_quote(quote: dict) -> dict:
        instrument_id = parse_instrument_url(quote["instrument"])

        plucked = {"instrument_id": instrument_id, **pluck(DESIRED_QUOTE_KEYS, quote)}
        plucked["updated_at"] = parse_updated_at(plucked["updated_at"])
        return plucked

    quotes = list(filter(lambda quote: quote != None, quotes))

    def format_quote(quote: dict) -> dict:
        return {"symbol": quote["symbol"], "bid": quote["bid_price"], "ask": quote["ask_price"]}

    pprint(list(map(format_quote, quotes)))

    # Update the index collection with up-to-date tradability info
    timestamp = datetime.datetime.utcnow()

    def update_index_symbol(datum: dict) -> pymongo.operations.UpdateOne:
        data = {
            "timestamp": timestamp,
            "has_traded": datum.get("has_traded"),
            "updated_at": parse_updated_at(datum.get("updated_at")),
            "trading_halted": datum.get("trading_halted"),
        }
        instrument_id = parse_instrument_url(datum["instrument"])

        return pymongo.operations.UpdateOne({"instrument_id": instrument_id}, {"$set": data})

    ops = list(map(update_index_symbol, quotes))
    INDEX_COL.bulk_write(ops, ordered=False)

    quotes = list(map(map_quote, quotes))
    try:
        collection.insert_many(quotes, ordered=False)
    except BulkWriteError as bwe:
        for err in bwe.details["writeErrors"]:
            if "duplicate key" not in err["errmsg"]:
                print("ERROR: Unhandled exception occured during batch write:")
                pprint(err)


def store_fundamentals(data, collection: pymongo.collection.Collection):
    if not data:
        return

    for datum in data:
        if not datum:
            continue

        print(datum)
        instrument_id = parse_instrument_url(datum["instrument"])
        doc = {**omit("instrument", datum), "instrument_id": instrument_id}

        try:
            collection.replace_one({"instrument_id": instrument_id}, doc, True)
        except Exception as e:
            print(f"Error storing fundamentals: {e}")


def fetch_popularity(
    instrument_ids: str,
    collection: pymongo.collection.Collection,
    sleep,
    worker_request_cooldown_seconds=1.0,
):
    if instrument_ids == "__DONE":
        print("Received DONE message for popularity fetching; marking as complete in Redis...")
        set_popularities_finished()
        return

    url = "https://api.robinhood.com/instruments/popularity/?ids={}".format(instrument_ids)

    def reduce_popularity(acc: dict, datum: dict) -> dict:
        instrument_id = parse_instrument_url(datum["instrument"])

        return {**acc, instrument_id: datum["num_open_positions"]}

    def call_self():
        """ In the case of some kind of error, wait 30 seconds and then re-call ourself to try
        again. """

        sleep(30)
        fetch_popularity(
            instrument_ids,
            collection,
            sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )

    try:
        res = TRADER.get_url(url)
        popularities = reduce(reduce_popularity, res["results"], {})
        store_popularities(popularities, collection)
        sleep(worker_request_cooldown_seconds)
    except KeyError:  # Likely a ratelimit issue; cooldown.
        if not res.get("results"):
            print("ERROR: Unexpected response received from popularity request: {}".format(res))
            sleep(120)
            return

        print(res)
        cooldown_seconds = parse_throttle_res(res["detail"])
        print(
            "Popularity fetch request failed; waiting for {} second cooldown...".format(
                cooldown_seconds
            )
        )
        sleep(cooldown_seconds)

        fetch_popularity(
            instrument_ids,
            collection,
            sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )
    except requests.exceptions.ReadTimeout:
        print("Read timeout while fetching popularity... Sleeping 30 seconds and re-trying.")
        call_self()
    except TypeError:  # They sent back some broken data; just ignore it.
        print("Robinhood sent back garbage; ignoring.")
        call_self()
    except JSONDecodeError:
        print("Robinhood API sending back HTML; backing off.")
        call_self()


def fetch_quote(
    symbols: str,
    collection: pymongo.collection.Collection,
    sleep,
    worker_request_cooldown_seconds=1.0,
):
    if symbols == "__DONE":
        print("Received DONE message for quote fetching; marking as complete in Redis...")
        set_quotes_finished()
        return

    try:
        url = f"{endpoints.quotes()}?symbols={symbols}"
        res = requests.get(url, headers=TRADER.headers, timeout=15)
        res = res.json()
        quotes = res["results"]
        store_quotes(quotes, collection)

        sleep(worker_request_cooldown_seconds)
    except KeyError:  # Likely a ratelimit issue; cooldown.
        if not res.get("detail"):
            print("ERROR: Unexpected response received from quote request: {}".format(res))
            sleep(120)
            return

        cooldown_seconds = parse_throttle_res(res["detail"])
        print(
            "Quote fetch request failed; waiting for {} second cooldown...".format(cooldown_seconds)
        )
        sleep(cooldown_seconds)

        fetch_quote(
            symbols,
            collection,
            sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )
    except InvalidTickerSymbol:
        print("Error while fetching symbols: {}".format(symbols))
    except requests.exceptions.ReadTimeout:
        print("Read timeout while fetching quotes... Sleeping 30 seconds and re-trying.")
        sleep(30)
        fetch_quote(
            symbols,
            collection,
            sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )


def fetch_fundamentals(
    instrument_ids: str,
    collection: pymongo.collection.Collection,
    sleep,
    worker_request_cooldown_seconds=1.0,
):
    if instrument_ids == "__DONE":
        print("Received DONE message for fundamentals fetching.")
        return

    try:
        instrument_urls = ",".join(list(map(build_instrument_url, instrument_ids.split(","))))
        url = f"https://api.robinhood.com/fundamentals/?instruments={instrument_urls}"
        res = requests.get(url, headers=TRADER.headers, timeout=15)
        res = res.json()
        fundamentals = res["results"]
        store_fundamentals(fundamentals, collection)

        sleep(worker_request_cooldown_seconds)
    except KeyError:  # Likely a ratelimit issue; cooldown.
        if not res.get("detail"):
            print("ERROR: Unexpected response received from fundamentals request: {}".format(res))
            sleep(120)
            return

        cooldown_seconds = parse_throttle_res(res["detail"])
        print(
            "Fundamentals fetch request failed; waiting for {} second cooldown...".format(
                cooldown_seconds
            )
        )
        sleep(cooldown_seconds)

        fetch_fundamentals(
            instrument_ids,
            collection,
            sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )
    except InvalidTickerSymbol:
        print("Error while fetching instrument ids: {}".format(instrument_ids))
    except requests.exceptions.ReadTimeout:
        print("Read timeout while fetching quotes... Sleeping 30 seconds and re-trying.")
        sleep(30)
        fetch_fundamentals(
            instrument_ids,
            collection,
            sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )


WORK_CBS = {
    "popularity": (fetch_popularity, "popularity", "instrument_ids"),
    "quote": (fetch_quote, "quotes", "symbols"),
    "fundamentals": (fetch_fundamentals, "fundamentals", "fundamentals_instrument_ids"),
}


@click.command()
@click.option(
    "--mode", type=click.Choice(["quote", "popularity", "fundamentals"]), default="popularity"
)
@click.option("--rabbitmq_host", default="localhost")
@click.option("--rabbitmq_port", type=click.INT, default=5672)
@click.option("--worker_request_cooldown_seconds", type=click.FLOAT, default=1.0)
def cli(mode: str, rabbitmq_host: str, rabbitmq_port: str, worker_request_cooldown_seconds: float):
    if mode in ["quote", "fundamentals"]:
        robinhood_username = environ.get("ROBINHOOD_USERNAME")
        robinhood_password = environ.get("ROBINHOOD_PASSWORD")
        mfa_secret = environ.get("MFA_SECRET")

        if robinhood_username is None or robinhood_password is None or mfa_secret is None:
            print(
                (
                    "Error: `ROBINHOOD_USERNAME`, `ROBINHOOD_PASSWORD`, and `MFA_SECRET` environment "
                    "variables must be provided in this mode."
                )
            )
            exit(1)

        TRADER.login(robinhood_username, robinhood_password, qr_code=mfa_secret)

    print("Unlocking cache...")
    unlock_cache()

    print("init rabbitmq connection")
    rabbitmq_connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=rabbitmq_host, port=rabbitmq_port)
    )
    rabbitmq_channel = rabbitmq_connection.channel()
    print("rabbitmq connection init'd")

    (work_cb, collection_name, channel_name) = WORK_CBS[mode]
    db = get_db()
    collection = db[collection_name]
    rabbitmq_channel.queue_declare(queue=channel_name)

    def handle_work(_channel, _method, _properties, body):
        work_cb(
            body.decode("utf-8"),
            collection,
            rabbitmq_connection.sleep,
            worker_request_cooldown_seconds=worker_request_cooldown_seconds,
        )

    rabbitmq_channel.basic_consume(channel_name, handle_work, auto_ack=False)
    rabbitmq_channel.start_consuming()


if __name__ == "__main__":
    cli()  # pylint: disable=E1120
