""" Entrypoint for the Robinhood scraper.  Pulls data from the top instruments and pushes the
IDs of tradable instruments into a RabbitMQ queue. """

from time import sleep
from typing import Dict, Iterable, List, Tuple

import click
import pika
import pymongo
from Robinhood import Robinhood

from common import parse_throttle_res
from db import get_db, set_instruments_finished, set_update_started, lock_cache


def get_tradable_instrument_ids(instruments: List[Dict[str, str]]) -> List[Tuple[str, str]]:
    """ Returns the instrument IDs and symbols of all tradable instruments in the provided list
    of instruments. """
    tradable_instruments: Iterable[Dict[str, str]] = filter(
        lambda instrument: instrument.get("tradability") == "tradable", instruments
    )

    tuples: Iterable[Tuple[str, str]] = map(
        lambda instrument: (instrument["id"], instrument["symbol"]), tradable_instruments
    )

    return list(tuples)


@click.command()
@click.option("--rabbitmq_host", type=click.STRING, default="localhost")
@click.option("--rabbitmq_port", type=click.INT, default=5672)
@click.option("--scraper_request_cooldown_seconds", type=click.FLOAT, default=1.0)
def cli(rabbitmq_host: str, rabbitmq_port: int, scraper_request_cooldown_seconds: float):
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
    index_col = db["index"]
    index_col.create_index("instrument_id", unique=True)

    total_ids = 0
    quotes = []
    instrument_ids = []
    while True:
        fetched_instruments: List[Dict[str, str]] = res["results"]
        tradable_instrument_ids = get_tradable_instrument_ids(fetched_instruments)
        total_ids += len(tradable_instrument_ids)

        for instrument_id, symbol in tradable_instrument_ids:
            try:
                index_col.insert_one({"instrument_id": instrument_id, "symbol": symbol})
            except pymongo.errors.DuplicateKeyError:
                pass

            instrument_ids.append(instrument_id)
            quotes.append(symbol)

            if len(quotes) == 20:
                rabbitmq_channel.basic_publish(
                    exchange="", routing_key="symbols", body=",".join(quotes)
                )

                rabbitmq_channel.basic_publish(
                    exchange="", routing_key="instrument_ids", body=",".join(instrument_ids)
                )

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

            rabbitmq_channel.basic_publish(
                exchange="", routing_key="symbols", body=",".join(quotes)
            )
            rabbitmq_channel.basic_publish(
                exchange="", routing_key="instrument_ids", body=",".join(instrument_ids)
            )

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
