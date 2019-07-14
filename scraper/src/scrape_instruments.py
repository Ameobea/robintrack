""" Entrypoint for the Robinhood scraper.  Pulls data from the top instruments and pushes the
IDs of tradable instruments into a RabbitMQ queue. """

from time import sleep
from typing import Dict, Iterable, List

import click
import pika
import pymongo
from Robinhood import Robinhood

from common import parse_throttle_res
from db import get_db, set_instruments_finished, set_update_started
from utils import omit


def get_tradable_instruments(instruments: List[Dict[str, object]]) -> Iterable[Dict[str, object]]:
    """ Filters the provided list of instruments to only include those that are tradeable """

    return filter(lambda instrument: instrument.get("tradability") == "tradable", instruments)


def try_update_instrument(index_coll, instrument_datum: dict):
    instrument_id = instrument_datum["id"]
    new_doc = {**omit("id", instrument_datum), "instrument_id": instrument_id}

    try:
        index_coll.replace_one({"instrument_id": instrument_id}, new_doc, True)
    except pymongo.errors.DuplicateKeyError:
        # There must be another document with the same symbol in the collection.  We should delete
        # it and replace it with this one instead.
        res = index_coll.delete_many({"symbol": instrument_datum["symbol"]})
        if res.deleted_count == 0:
            print(
                (
                    f"WARN: Duplicate key error for symbol {instrument_datum['symbol']} "
                    f"(id {instrument_id}) but no other entry with that symbol in the "
                    "index collection"
                )
            )
        else:
            index_coll.insert_one(new_doc)
            print(f"Handled symbol conflict; re-trying update for instrument {instrument_id}")


def publish_all(
    rabbitmq_channel, quotes: List[str], instrument_ids: List[str], scrape_fundamentals: bool
):
    rabbitmq_channel.basic_publish(exchange="", routing_key="symbols", body=",".join(quotes))

    rabbitmq_channel.basic_publish(
        exchange="", routing_key="instrument_ids", body=",".join(instrument_ids)
    )

    if scrape_fundamentals:
        rabbitmq_channel.basic_publish(
            exchange="", routing_key="fundamentals_instrument_ids", body=",".join(instrument_ids)
        )


@click.command()
@click.option("--rabbitmq_host", type=click.STRING, default="localhost")
@click.option("--rabbitmq_port", type=click.INT, default=5672)
@click.option("--scraper_request_cooldown_seconds", type=click.FLOAT, default=1.0)
@click.option("--scrape-fundamentals", is_flag=True, default=False)
def cli(
    rabbitmq_host: str,
    rabbitmq_port: int,
    scraper_request_cooldown_seconds: float,
    scrape_fundamentals: bool,
):
    print("init rabbitmq connection")
    rabbitmq_connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=rabbitmq_host, port=rabbitmq_port)
    )
    rabbitmq_channel = rabbitmq_connection.channel()
    rabbitmq_channel.queue_declare(queue="instrument_ids")
    print("rabbitmq connection init'd")

    # Lock and flush the existing cache
    print("Locking the cache in preparation for update...")
    set_update_started()

    trader = Robinhood()
    res = trader.get_url("https://api.robinhood.com/instruments/")

    db = get_db()
    index_coll = db["index"]
    index_coll.create_index("instrument_id", unique=True)

    total_ids = 0
    quotes = []
    instrument_ids = []
    while True:
        fetched_instruments: List[Dict[str, str]] = res["results"]
        tradable_instruments = get_tradable_instruments(fetched_instruments)

        for instrument_datum in tradable_instruments:
            total_ids += 1
            try_update_instrument(index_coll, instrument_datum)

            instrument_ids.append(instrument_datum["id"])
            quotes.append(instrument_datum["symbol"])

            if len(quotes) == 20:
                publish_all(rabbitmq_channel, quotes, instrument_ids, scrape_fundamentals)

                quotes = []
                instrument_ids = []

        if res.get("detail"):
            # Request was throttled; wait for a cooldown before continuing

            cooldown_seconds = parse_throttle_res(res["detail"])
            print(
                "Instruments fetch request failed; waiting for {} second cooldown...".format(
                    cooldown_seconds
                )
            )
            sleep(cooldown_seconds)
        elif res.get("next"):
            # There are more instruments to scrape.  Wait for the standard cooldown and then
            # continue by fetching the next request url.

            sleep(scraper_request_cooldown_seconds)
            res = trader.get_url(res["next"])
        else:
            # We're done scraping; there are no more instruments in the list.
            publish_all(rabbitmq_channel, quotes, instrument_ids, scrape_fundamentals)

            # Publish a finished message over the channels to indicate that there are no more
            # items to process in this run.
            rabbitmq_channel.basic_publish(exchange="", routing_key="symbols", body="__DONE")
            rabbitmq_channel.basic_publish(exchange="", routing_key="instrument_ids", body="__DONE")

            # Mark the instrument scrape as finished
            set_instruments_finished()

            print(
                "Finished scraping; fetched a total of {} tradable instrument IDs.".format(
                    total_ids
                )
            )
            break

    rabbitmq_connection.close()


if __name__ == "__main__":
    cli()  # pylint: disable=E1120
