""" Defines a worker that subscribes to instrument IDs sent over RabbitMQ and either fetches
quotes, popularity, or stores the ID in a database. """

import os
import re
from time import sleep

from Robinhood import Robinhood
import pika

RABBITMQ_HOST = os.environ.get('RABBITMQ_HOST') or 'localhost'
RABBITMQ_PORT = int(os.environ.get('RABBITMQ_PORT') or '5672')
MODE = os.environ.get('MODE') or 'FETCH_POPULARITY'
REQUEST_COOLDOWN_SECONDS = float(os.environ.get('REQUEST_COOLDOWN_SECONDS') or 0.5)

rabbitmq_connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT))
rabbitmq_channel = rabbitmq_connection.channel()
rabbitmq_channel.queue_declare(queue='instrument_ids')

trader = Robinhood()

THROTTLE_RGX = r'.*Expected available in (\d*\.?\d+) seconds.'

def parse_throttle_res(msg: str) -> int:
    """ Given the response of a throttle message, returns the cooldown. """
    match = re.match(THROTTLE_RGX, msg)
    if not match:
        print('ERROR: Unable to parse throttle message.  {}{}'.format(
            msg,
            'Assuming 1.5 minutes...'
        ))
        return 120

    return int(float(match[1]) + 2.0)


def fetch_popularity(instrument_id: bytes):
    instrument_id = instrument_id.decode('utf-8')
    url = 'https://api.robinhood.com/instruments/{}/popularity/'.format(instrument_id)

    res = trader.get_url(url)
    try:
        print(res['num_open_positions'])
        sleep(REQUEST_COOLDOWN_SECONDS)
    except KeyError: # Likely a ratelimit issue; cooldown.
        if not res.get('detail'):
            print('ERROR: Unexpected response received from popularity request: {}'.format(res))
            sleep(120)
            return

        cooldown_seconds = parse_throttle_res(res['detail'])
        print('Popularity fetch request failed; waiting for {} second cooldown...'.format(cooldown_seconds))
        sleep(cooldown_seconds)

        fetch_popularity(instrument_id)

def fetch_quote(instrument_id: str):
    pass # TODO


WORK_CBS = {
    'FETCH_POPULARITY': fetch_popularity,
    'FETCH_QUOTE': fetch_quote,
}

work_cb = WORK_CBS[MODE]

def handle_work(channel, method, properties, body):
    work_cb(body)

rabbitmq_channel.basic_consume(handle_work, queue='instrument_ids', no_ack=True)
rabbitmq_channel.start_consuming()
