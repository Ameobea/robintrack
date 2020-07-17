""" Pre-computes popularity ranking for all symbols and stores it in Redis for quick + easy
retrieval, avoiding the expensive popularity ranking queries every time. """

from datetime import datetime, timedelta
import json

from pymongo.cursor import Cursor


def get_popularity_ranking_query():
    two_hours_ago = datetime.now() - timedelta(hours=2)
    return [
        {"$match": {"timestamp": {"$gte": two_hours_ago}}},
        {"$group": {"_id": "$instrument_id", "latest_popularity": {"$first": "$popularity"}}},
        {"$sort": {"latest_popularity": -1, "symbol": 1}},
    ]


def compute_popularity_rankings(get_db) -> list:
    """ Returns a list of all symbols ordered by current popularity, ordered most to least
    popular. """

    db = get_db()

    print("Performing popularity aggregation query")
    res = list(db["popularity"].aggregate(get_popularity_ranking_query()))

    unique_instrument_ids = [datum["_id"] for datum in res]
    index_res = db["index"].find({ "instrument_id": { "$in": unique_instrument_ids } })
    instrument_data = {}
    for item in index_res:
        instrument_data[item["instrument_id"]] = item

    ret = []
    for datum in res:
        instrument_datum = instrument_data.get(datum["_id"])
        if instrument_datum is None:
            continue

        ret.append({ "latest_popularity": datum["latest_popularity"], "name": instrument_datum["simple_name"], "symbol": instrument_datum["symbol"] })

    return ret


def set_popularity_rankings(redis_client, rankings: Cursor):
    """ Sets the popularity rankings for each symbol into Redis. """

    rankings_map = {}
    rankings_list = []
    ranking = 0
    print("Finished fetching population data.")
    for entry in rankings:
        symbol = entry.get("symbol")
        name = entry.get("name")
        if symbol is None:
            continue
        popularity = entry.get("latest_popularity", 0)

        ranking += 1
        rankings_map[symbol] = ranking
        rankings_list.append(json.dumps({"symbol": symbol, "popularity": popularity, "name": name}))

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
