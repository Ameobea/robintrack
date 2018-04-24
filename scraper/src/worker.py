""" Defines a worker that subscribes to instrument IDs sent over RabbitMQ and either fetches
quotes, popularity, or stores the ID in a database. """

import datetime
import os
import re
from time import sleep

from Robinhood import Robinhood
from Robinhood.exceptions import InvalidTickerSymbol
import pika

RABBITMQ_HOST = os.environ.get('RABBITMQ_HOST') or 'localhost'
RABBITMQ_PORT = int(os.environ.get('RABBITMQ_PORT') or '5672')
MODE = os.environ.get('MODE') or 'FETCH_POPULARITY'
WORKER_REQUEST_COOLDOWN_SECONDS = float(os.environ.get('WORKER_REQUEST_COOLDOWN_SECONDS') or 1)

from common import parse_throttle_res, pp_json
from db import get_db

rabbitmq_connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST, port=RABBITMQ_PORT))
rabbitmq_channel = rabbitmq_connection.channel()

trader = Robinhood()
db = get_db()
collection = None

INSTRUMENT_ID_RGX = r'https://api.robinhood.com/instruments/(.+?)/'

def store_popularity(instrument_id: str, popularity: int):
    """ Creates an entry in the database for the popularity. """
    doc = {
        "timestamp": datetime.datetime.utcnow(),
        "instrument_id": instrument_id,
        "popularity": popularity,
    }

    collection.insert_one(doc)

def store_quotes(quotes: dict):
    """ Creates entries in the database for the provided quotes. """

    def map_quote(quote: dict) -> dict:
        match = re.match(INSTRUMENT_ID_RGX, quote.get('instrument') or '')
        if not match:
            print('ERROR: Unable to extract instrument id from quote response: {}'.format(quote))
            return

        return {
            'instrument_id': match[1],
            **quote
        }

    quotes = list(filter(lambda quote: quote != None, quotes))
    quotes = list(map(map_quote, quotes))
    collection.insert_many(quotes, ordered=False)

def fetch_popularity(instrument_id: str):
    url = 'https://api.robinhood.com/instruments/{}/popularity/'.format(instrument_id)

    res = trader.get_url(url)
    try:
        open_positions = int(res['num_open_positions'])
        store_popularity(instrument_id, open_positions)

        sleep(WORKER_REQUEST_COOLDOWN_SECONDS)
    except KeyError: # Likely a ratelimit issue; cooldown.
        if not res.get('detail'):
            print('ERROR: Unexpected response received from popularity request: {}'.format(res))
            sleep(120)
            return

        cooldown_seconds = parse_throttle_res(res['detail'])
        print('Popularity fetch request failed; waiting for {} second cooldown...'.format(cooldown_seconds))
        sleep(cooldown_seconds)

        fetch_popularity(instrument_id)

def fetch_quote(symbols: str):
    try:
        res = trader.quote_data(symbols)
        quotes = res['results']
        store_quotes(quotes)

        sleep(WORKER_REQUEST_COOLDOWN_SECONDS)
    except KeyError: # Likely a ratelimit issue; cooldown.
        if not res.get('detail'):
            print('ERROR: Unexpected response received from popularity request: {}'.format(res))
            sleep(120)
            return

        cooldown_seconds = parse_throttle_res(res['detail'])
        print('Quote fetch request failed; waiting for {} second cooldown...'.format(cooldown_seconds))
        sleep(cooldown_seconds)

        fetch_quote(symbols)
    except InvalidTickerSymbol:
        print('Error while fetching symbols: {}'.format(symbols))

WORK_CBS = {
    'FETCH_POPULARITY': (fetch_popularity, "popularity", "instrument_ids"),
    'FETCH_QUOTE': (fetch_quote, "quotes", "symbols"),
}

(work_cb, collection_name, channel_name) = WORK_CBS[MODE]
collection = db[collection_name]
rabbitmq_channel.queue_declare(queue=channel_name)

def handle_work(channel, method, properties, body):
    work_cb(body.decode('utf-8'))

rabbitmq_channel.basic_consume(handle_work, queue=channel_name, no_ack=True)
rabbitmq_channel.start_consuming()
