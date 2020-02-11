import datetime
import os
import json

import pymongo

from db import get_db, set_popularities_finished, set_quotes_finished, unlock_cache

INDEX_COLLECTION = get_db()["index"]
QUOTES_COLLECTION = get_db()["quotes"]

BASE_PATH = "/Users/cprimozic/Downloads/out"

ALREADY_PROCESSED_FNAME = "/Users/cprimozic/robintrack/scraper/src/already_processed.txt"
already_processed = open(ALREADY_PROCESSED_FNAME, "r")
ALREADY_PROCESSED = set(list(map(lambda s: s.replace("\n", ""), list(already_processed))))
already_processed.close()

already_processed_file = open(ALREADY_PROCESSED_FNAME, "a")

START_DT = datetime.datetime(2019, 12, 9, 0, 0, 0, 0)
END_DT = datetime.datetime(2020, 1, 15, 0, 0, 0, 0)

for fname in os.listdir(BASE_PATH):
    symbol = fname.split(".")[0]
    if symbol in ALREADY_PROCESSED:
        print("Skipping already processed symbol {}".format(symbol))
        continue

    instrument_id_doc = INDEX_COLLECTION.find_one({"symbol": symbol})
    if instrument_id_doc is None:
        print("No index doc for symbol {}; skipping recovery...".format(symbol))
        continue
    instrument_id = instrument_id_doc["instrument_id"]

    existing_local_docs = []
    with open(os.path.join(BASE_PATH, fname)) as f:
        parsed = json.loads(f.read())
        if "historicals" not in parsed:
            print(f"Error: no historicals for symbol {symbol}")
            continue

        existing_local_docs = parsed["historicals"]

    existing_remote_docs = list(
        QUOTES_COLLECTION.find({"instrument_id": instrument_id}).sort(
            "updated_at", pymongo.ASCENDING
        )
    )

    existing_local_docs = list(
        filter(
            lambda doc: doc["updated_at"] > START_DT and doc["updated_at"] < END_DT,
            list(
                map(
                    lambda doc: {
                        "instrument_id": instrument_id,
                        "ask_price": float(doc["open_price"]),
                        "ask_size": 0.0,
                        "bid_price": float(doc["open_price"]),
                        "bid_size": 0.0,
                        "last_trade_price": float(doc["open_price"]),
                        "last_extended_hours_trade_price": float(doc["open_price"]),
                        "updated_at": datetime.datetime.strptime(
                            doc["begins_at"], "%Y-%m-%dT%H:%M:%SZ"
                        ),
                    },
                    existing_local_docs,
                )
            ),
        )
    )
    existing_remote_docs = list(
        map(
            lambda doc: {
                "instrument_id": doc["instrument_id"],
                "ask_price": doc["ask_price"],
                "ask_size": doc["ask_size"],
                "bid_price": doc["bid_price"],
                "bid_size": doc["bid_size"],
                "last_trade_price": doc["last_trade_price"],
                "last_extended_hours_trade_price": doc["last_extended_hours_trade_price"],
                "updated_at": doc["updated_at"],
            },
            existing_remote_docs,
        )
    )

    docs = [*existing_local_docs, *existing_remote_docs]
    docs_by_ts = {}
    for doc in docs:
        docs_by_ts[doc["updated_at"]] = doc
    docs = list(docs_by_ts.values())
    # sort by timestamp ascending
    docs.sort(key=lambda item: item["updated_at"])

    QUOTES_COLLECTION.delete_many({"instrument_id": instrument_id})
    if len(docs) > 0:
        QUOTES_COLLECTION.insert_many(docs)
    print("Successfully restored symbol {}".format(symbol))
    already_processed_file.write(symbol + "\n")


# import datetime
# import os

# import pymongo

# from db import get_db, set_popularities_finished, set_quotes_finished, unlock_cache

# INDEX_COLLECTION = get_db()["index"]
# POPULARITY_COLLECTION = get_db()["popularity"]

# LOCAL_QUOTES_COLLECTION = get_db_local()['quotes']

# BASE_PATH = "/Users/cprimozic/Downloads/tmp/popularity_export"

# ALREADY_PROCESSED_FNAME = "/Users/cprimozic/robintrack/scraper/src/already_processed.txt"
# already_processed = open(ALREADY_PROCESSED_FNAME, "r")
# ALREADY_PROCESSED = set(list(map(lambda s: s.replace("\n", ""), list(already_processed))))
# already_processed.close()

# for fname in os.listdir(BASE_PATH):
#     symbol = fname.split(".")[0]
#     if symbol in ALREADY_PROCESSED:
#         print("Skipping already processed symbol {}".format(symbol))
#         continue

#     fpath = str(os.path.join(BASE_PATH, fname))
#     with open(fpath, "r") as f:
#         next(f)  # Skip header row

#         vals = []
#         for line in f:
#             spl = line.split(",")
#             # "2020-01-05 00:42:26"
#             ts_string = spl[0].replace('"', "")
#             dt = datetime.datetime.strptime(ts_string, "%Y-%m-%d %H:%M:%S")
#             popularity = int(spl[1])
#             vals.append((dt, popularity))

#         instrument_id_doc = INDEX_COLLECTION.find_one({"symbol": symbol})
#         if instrument_id_doc is None:
#             print("No index doc for symbol {}; skipping recovery...".format(symbol))
#             continue
#         instrument_id = instrument_id_doc["instrument_id"]
#         existing_docs = list(
#             POPULARITY_COLLECTION.find({"instrument_id": instrument_id}).sort(
#                 "timestamp", pymongo.ASCENDING
#             )
#         )
#         existing_docs = list(
#             map(
#                 lambda doc: {
#                     "instrument_id": doc["instrument_id"],
#                     "timestamp": doc["timestamp"],
#                     "popularity": doc["popularity"],
#                 },
#                 existing_docs,
#             )
#         )

#         docs = list(
#             map(
#                 lambda item: {
#                     "instrument_id": instrument_id,
#                     "timestamp": item[0],
#                     "popularity": item[1],
#                 },
#                 vals,
#             )
#         )
#         docs = [*existing_docs, *docs]
#         docs_by_ts = {}
#         for doc in docs:
#             docs_by_ts[doc["timestamp"]] = doc
#         docs = list(docs_by_ts.values())
#         # sort by timestamp ascending
#         docs.sort(key=lambda item: item["timestamp"])

#         POPULARITY_COLLECTION.delete_many({"instrument_id": instrument_id})
#         POPULARITY_COLLECTION.insert_many(docs)
#         print("Successfully restored symbol {}".format(symbol))
