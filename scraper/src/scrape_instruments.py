""" Entrypoint for the Robinhood scraper.  Pulls data from the top instruments and pushes the
IDs of tradable instruments into a RabbitMQ queue. """

import json
import os
from time import sleep
from typing import List

import click
from Robinhood import endpoints, Robinhood
import pika
import pymongo

from common import parse_throttle_res, pp_json
from db import get_db

def get_tradable_instrument_ids(instruments: dict) -> List[str]:
    """ Returns the instrument IDs and symbols of all tradable instruments in the provided list
    of instruments. """
    tradable_instruments = filter(
        lambda instrument: instrument.get('tradability') == 'tradable',
        instruments
    )

    return list(map(
        lambda instrument: (instrument['id'], instrument['symbol']),
        tradable_instruments
    ))

@click.command()
@click.option('--rabbitmq_host', type=click.STRING, default='localhost')
@click.option('--rabbitmq_port', type=click.INT, default=5672)
@click.option('--scraper_request_cooldown_seconds', type=click.FLOAT, default=1.0)
def cli(rabbitmq_host: str, rabbitmq_port: int, scraper_request_cooldown_seconds: float):
    rabbitmq_connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=rabbitmq_host, port=rabbitmq_port)
    )
    rabbitmq_channel = rabbitmq_connection.channel()
    rabbitmq_channel.queue_declare(queue='instrument_ids')

    trader = Robinhood()
    res = trader.get_url("https://api.robinhood.com/instruments/")

    db = get_db()
    index_col = db['index']
    index_col.create_index('instrument_id', unique=True)

    total_ids = 0
    quotes = []
    instrument_ids = []
    while True:
        fetched_instruments = res['results']
        tradable_instrument_ids = get_tradable_instrument_ids(fetched_instruments)
        total_ids += len(tradable_instrument_ids)

        for instrument_id, symbol in tradable_instrument_ids:
            try:
                index_col.insert_one({'instrument_id': instrument_id, 'symbol': symbol})
            except pymongo.errors.DuplicateKeyError:
                pass

            instrument_ids.append(instrument_id)
            quotes.append(symbol)

            if len(quotes) == 20:
                rabbitmq_channel.basic_publish(
                    exchange='',
                    routing_key='symbols',
                    body=','.join(quotes)
                )

                rabbitmq_channel.basic_publish(
                    exchange='',
                    routing_key='instrument_ids',
                    body=','.join(instrument_ids)
                )

                quotes = []
                instrument_ids = []

        if res.get('detail'):
            cooldown_seconds = parse_throttle_res(res['detail'])
            print('Instruments fetch request failed; waiting for {} second cooldown...'.format(
                cooldown_seconds))
            sleep(cooldown_seconds)
        elif res.get('next'):
            sleep(scraper_request_cooldown_seconds)
            res = trader.get_url(res['next'])
        else:
            rabbitmq_channel.basic_publish(
                exchange='',
                routing_key='symbols',
                body=','.join(quotes)
            )

            print('Finished scraping; fetched a total of {} tradable instrument IDs.'.format(
                total_ids))
            break

    rabbitmq_connection.close()

if __name__ == '__main__':
    cli() # pylint: disable=E1120
