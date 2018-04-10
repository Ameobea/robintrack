""" Entrypoint for the Robinhood scraper.  Pulls data from the top instruments and pushes the
IDs of tradable instruments into a RabbitMQ queue. """

import json
import os
from typing import List

from Robinhood import endpoints, Robinhood
import pika

RABBITMQ_HOST = os.environ.get('RABBITMQ_HOST') or 'localhost'
RABBITMQ_PORT = int(os.environ.get('RABBITMQ_PORT') or '5672')

rabbitmq_connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT)
)
rabbitmq_channel = rabbitmq_connection.channel()
rabbitmq_channel.queue_declare(queue='instrument_ids')

def json_pp(x: object) -> str:
    """ Pretty-prints the provided JSON-serializable object. """
    print(json.dumps(x, indent=2, sort_keys=True))


def get_tradable_instrument_ids(instruments: dict) -> List[str]:
    """ Returns the instrument IDs of all tradable instruments in the provided list
    of instruments. """
    tradable_instruments = filter(
        lambda instrument: instrument.get('tradability') == 'tradable',
        instruments
    )
    return list(map(lambda instrument: instrument['id'], tradable_instruments))


trader = Robinhood()
res = trader.get_url("https://api.robinhood.com/instruments/")

while True:
    fetched_instruments = res['results']
    tradable_instrument_ids = get_tradable_instrument_ids(fetched_instruments)

    for instrument_id in tradable_instrument_ids:
        rabbitmq_channel.basic_publish(
            exchange='',
            routing_key='instrument_ids',
            body=instrument_id
        )

    if res.get('next'):
        res = trader.get_url(res['next'])
    else:
        break
