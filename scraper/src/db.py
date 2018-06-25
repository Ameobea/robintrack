""" Utilities for interacting with MongoDB """

from os import environ

from pymongo import Database, MongoClient
import redis

MONGO_USER = environ.get("MONGO_USER") or ""
MONGO_PASSWORD = environ.get("MONGO_PASSWORD") or ""
MONGO_HOST = environ.get("MONGO_HOST") or "localhost"
MONGO_PORT = int(environ["MONGO_PORT"]) if environ.get("MONGO_PORT") else 27017
REDIS_HOST = environ.get("REDIS_HOST") or "localhost"
REDIS_PORT = int(environ.get("REDIS_PORT") or "6379")

mongo_url = "mongodb://{}{}{}{}{}:{}/".format(
    MONGO_USER,
    "" if MONGO_PASSWORD == "" else ":",
    MONGO_PASSWORD,
    "" if MONGO_USER == "" else "@",
    MONGO_HOST,
    MONGO_PORT,
)
mongo_client = MongoClient(mongo_url)


redis_client = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT, db=0)


# Each of these hashes corresponds to a given API endpoint.  When the cache is invalided, they are
# all cleared to avoid any old data being persisted.
CACHE_HASHES = []


def set_update_started():
    """ Marks all data scraping operations as in-progress, invalidates the cache, and marks it as
    invalid until all data scrapes are completed. """

    redis_client.set("INSTRUMENTS_FINISHED", "0")
    redis_client.set("POPULARITIES_FINISHED", "0")
    redis_client.set("QUOTES_FINISHED", "0")

    lock_cache()


def check_if_all_finished():
    """ Checks if the instrument, popularity, and quote scrapes are all finished.  If they are,
    then unlock and re-enable the cache. """

    all_finished = (
        redis_client.get("INSTRUMENTS_FINISHED")
        and redis_client.get("POPULARITIES_FINISHED")
        and redis_client.get("QUOTES_FINISHED")
    )

    if all_finished:
        unlock_cache()


def set_instruments_finished():
    """ This is called when the instrument scraper finishes scraping the full list of instruments.
    As soon as popularities and quotes are finished as well, the data scrape is complete and the
    cache can be re-enabled. """

    redis_client.set("INSTRUMENTS_FINISHED", "1")
    check_if_all_finished()


def set_popularities_finished():
    """ This is called when the popularity scraper finishes scraping popularities for all symbols.
    As soon as instruments and quotes are finished as well, the data scrape is complete and the
    cache can be re-enabled. """

    redis_client.set("POPULARITIES_FINISHED", "1")
    check_if_all_finished()


def set_quotes_finished():
    """ This is called when the quote scraper finishes scraping quotes for all symbols. As soon as
    instruments and popularities are finished as well, the data scrape is complete and the cache
    can be re-enabled. """

    redis_client.set("QUOTES_FINISHED", "1")
    check_if_all_finished()


def get_db():
    """ Returns an instance of the MongoDB database for this project. """

    return mongo_client["robinhood"]


def flush_cache():
    """ Removes all cache hashes, removing all existing cache entries. """

    for hash_name in CACHE_HASHES:
        redis_client.delete(hash_name)


def lock_cache():
    """ Marks the cache as invalidated and clears all existing cache entries.  This causes all
    requests to the backend to be served from MongoDB and prevents new insertions into the
    cache. """

    redis_client.set("CACHE_LOCKED", "1")


def unlock_cache():
    """ Marks the cache as valid, allowing new entries to be inserted and existing values to be
    used to service requests to the API. """

    redis_client.delete("CACHE_LOCKED")
