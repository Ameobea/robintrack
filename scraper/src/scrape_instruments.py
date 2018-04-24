""" Entrypoint for the Robinhood scraper.  Pulls data from the top instruments and pushes the
IDs of tradable instruments into a RabbitMQ queue. """

import json
import os
from time import sleep
from typing import List

from Robinhood import endpoints, Robinhood
import pika

from common import parse_throttle_res, pp_json


RABBITMQ_HOST = os.environ.get('RABBITMQ_HOST') or 'localhost'
RABBITMQ_PORT = int(os.environ.get('RABBITMQ_PORT') or '5672')
SCRAPER_REQUEST_COOLDOWN_SECONDS = float(
    os.environ.get('SCRAPER_REQUEST_COOLDOWN_SECONDS') or 1)


rabbitmq_connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT)
)
rabbitmq_channel = rabbitmq_connection.channel()
rabbitmq_channel.queue_declare(queue='instrument_ids')


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


trader = Robinhood()
res = trader.get_url("https://api.robinhood.com/instruments/")

total_ids = 0
quotes = []
instrument_ids = []
while True:
    fetched_instruments = res['results']
    tradable_instrument_ids = get_tradable_instrument_ids(fetched_instruments)
    total_ids += len(tradable_instrument_ids)

    for instrument_id, symbol in tradable_instrument_ids:
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
        sleep(SCRAPER_REQUEST_COOLDOWN_SECONDS)
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
