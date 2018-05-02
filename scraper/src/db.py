""" Utilities for interacting with MongoDB """

import os

from pymongo import MongoClient

MONGO_USER = os.environ.get('MONGO_USER') or ''
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD') or ''
MONGO_HOST = os.environ.get('MONGO_HOST') or 'localhost'
MONGO_PORT = int(os.environ.get('MONGO_PORT')) if os.environ.get('MONGO_HOST') else 27017

mongo_url = "mongodb://{}{}{}{}{}:{}/".format(
    MONGO_USER,
    '' if MONGO_PASSWORD == '' else ':',
    MONGO_PASSWORD,
    '' if MONGO_USER == '' else '@',
    MONGO_HOST,
    MONGO_PORT
)
mongo_client = MongoClient(mongo_url)


def get_db():
    """ Returns an instance of the MongoDB database for this project. """
    return mongo_client["robinhood"]
