""" Utilities for interacting with MongoDB """


from python_common.db import redis_client, get_db

from popularity_ranking import populate_popularity_rankings


def set_update_started():
    """ Marks all data scraping operations as in-progress, invalidates the cache, and marks it as
    invalid until all data scrapes are completed. """

    redis_client.delete("INSTRUMENTS_FINISHED")
    redis_client.delete("POPULARITIES_FINISHED")
    redis_client.delete("QUOTES_FINISHED")

    lock_cache()


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
        populate_popularity_rankings(redis_client, get_db)
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
