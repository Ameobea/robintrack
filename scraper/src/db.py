""" Utilities for interacting with MongoDB """

from os import environ

from pymongo import MongoClient
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


def get_db():
    """ Returns an instance of the MongoDB database for this project. """

    return mongo_client["robinhood"]


def set_update_started():
    """ Marks all data scraping operations as in-progress, invalidates the cache, and marks it as
    invalid until all data scrapes are completed. """

    redis_client.delete("INSTRUMENTS_FINISHED")
    redis_client.delete("POPULARITIES_FINISHED")
    redis_client.delete("QUOTES_FINISHED")

    lock_cache()
    flush_cache()


def check_if_all_finished():
    """ Checks if the instrument, popularity, and quote scrapes are all finished.  If they are,
    then flush, unlock, and re-enable the cache. """

    all_finished = (
        redis_client.get("INSTRUMENTS_FINISHED")
        and redis_client.get("POPULARITIES_FINISHED")
        and redis_client.get("QUOTES_FINISHED")
    )

    if all_finished:
        print("All updates finished! Flushing + unlocking cache...")
        flush_cache()
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


def flush_cache():
    """ Removes all cache hashes, removing all existing cache entries. """

    print("Flushing cache...")
    redis_client.flushdb()


def lock_cache():
    """ Marks the cache as invalidated and clears all existing cache entries.  This causes all
    requests to the backend to be served from MongoDB and prevents new insertions into the
    cache. """

    redis_client.set("CACHE_LOCKED", "1")
    print("Cache locked.")


def unlock_cache():
    """ Marks the cache as valid, allowing new entries to be inserted and existing values to be
    used to service requests to the API. """

    redis_client.delete("CACHE_LOCKED")
    print("Cache unlocked.")
