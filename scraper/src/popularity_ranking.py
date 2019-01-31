""" Pre-computes popularity ranking for all symbols and stores it in Redis for quick + easy
retrieval, avoiding the expensive popularity ranking queries every time. """

from datetime import datetime, timedelta
import json
from typing import List

from pymongo.cursor import Cursor


def compute_popularity_rankings(get_db) -> Cursor:
    """ Returns a list of all symbols ordered by current popularity, ordered most to least
    popular. """

    db = get_db()
    two_hours_ago = datetime.now() - timedelta(hours=2)
    print("Performing popularity aggregation query")
    return db["popularity"].aggregate(
        [
            {"$match": {"timestamp": {"$gte": two_hours_ago}}},
            {"$group": {"_id": "$instrument_id", "latest_popularity": {"$first": "$popularity"}}},
            {
                "$lookup": {
                    "from": "index",
                    "localField": "_id",
                    "foreignField": "instrument_id",
                    "as": "indexes",
                }
            },
            {"$addFields": {"symbol": {"$arrayElemAt": ["$indexes.symbol", 0]}}},
            {"$sort": {"latest_popularity": -1, "symbol": 1}},
        ]
    )


def set_popularity_rankings(redis_client, rankings: Cursor):
    """ Sets the popularity rankings for each symbol into Redis. """

    rankings_map = {}
    rankings_list = []
    ranking = 0
    print("Finished fetching population data.")
    for entry in rankings:
        symbol = entry.get("symbol")
        if symbol is None:
            continue

        ranking += 1
        rankings_map[symbol] = ranking
        rankings_list.append(
            json.dumps({"symbol": symbol, "popularity": entry.get("latest_popularity", 0)})
        )

    print("Setting popularity rankings hash...")
    # Populate the popularity mapping hash used to map symbol to ranking
    redis_client.delete("popularity_rankings")
    redis_client.hmset("popularity_rankings", rankings_map)
    print("Setting popularity list...")
    # Populate the list rankings all symbols from most to least popular in order
    redis_client.delete("popularity_list")
    redis_client.rpush("popularity_list", *rankings_list)
    print("Finished computing popularity caches")


def populate_popularity_rankings(redis_client, get_db):
    """ Compute the popularity rankings cache and set it into Redis. """

    rankings = compute_popularity_rankings(get_db)
    set_popularity_rankings(redis_client, rankings)
