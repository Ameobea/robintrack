import datetime
from typing import Dict

import click

from python_common.db import get_db


def write_day(db, docs: list):
    pass  # TODO


def populate_day(day: str):
    print(day)
    day = datetime.datetime.strptime(day, "%Y-%m-%d")
    day = day.replace(tzinfo=datetime.timezone.utc)
    next_day = day + datetime.timedelta(days=1)
    print(f"Getting changes for day {day}")

    db = get_db()

    diffs_by_instrument_id = {}
    # Iterate through all popularity and quote updates for that day and get the diff for both for each unique instrument id
    cur_instrument_id = None
    cur_start_val = None
    last_val = None
    for doc in (
        db["popularity"]
        .find({"timestamp": {"$gte": day, "$lt": next_day}})
        .sort([("instrument_id", 1), ("timestamp", 1)])
    ):
        instrument_id = doc["instrument_id"]

        if instrument_id != cur_instrument_id:
            if cur_start_val is not None and last_val is not None:
                diffs_by_instrument_id[cur_instrument_id] = {
                    "start_popularity": int(cur_start_val),
                    "end_popularity": int(last_val),
                }
            cur_instrument_id = instrument_id
            cur_start_val = doc["popularity"]

        last_val = doc["popularity"]
    diffs_by_instrument_id[cur_instrument_id] = {
        "start_popularity": cur_start_val,
        "end_popularity": last_val,
    }

    print("Got popularities, getting quotes...")
    cur_instrument_id = None
    cur_start_val = None
    last_val = None
    for doc in (
        db["quotes"]
        .find({"updated_at": {"$gte": day, "$lt": next_day}})
        .sort([("instrument_id", 1), ("updated_at", 1)])
    ):
        instrument_id = doc["instrument_id"]

        if instrument_id != cur_instrument_id:
            if (
                diffs_by_instrument_id.get(cur_instrument_id) is not None
                and cur_start_val is not None
                and last_val is not None
            ):
                if cur_start_val is not None:
                    diffs_by_instrument_id[cur_instrument_id]["start_price"] = float(cur_start_val)
                    diffs_by_instrument_id[cur_instrument_id]["end_price"] = float(last_val)
            cur_instrument_id = instrument_id
            cur_start_val = doc["last_trade_price"]

        last_val = doc["last_trade_price"]
    if diffs_by_instrument_id.get(cur_instrument_id) is not None:
        diffs_by_instrument_id[cur_instrument_id]["start_price"] = cur_start_val
        diffs_by_instrument_id[cur_instrument_id]["end_price"] = last_val

    total_pop_diff = 0
    for val in diffs_by_instrument_id.values():
        if val.get("start_popularity") is None or val.get("end_popularity") is None:
            continue
        pop_diff = abs(val["end_popularity"] - val["start_popularity"])
        total_pop_diff += pop_diff

    print(f"{day} TOTAL POP DIFF: {total_pop_diff}")


def save_backfill(db, buckets_by_dayid: Dict[str, Dict[str, dict]]):
    for (day_id, buckets) in buckets_by_dayid.items():
        to_insert = []
        abs_pop_diff_sum = 0

        for (instrument_id, doc) in buckets.items():
            to_insert.append(
                {
                    "day_id": day_id,
                    "instrument_id": instrument_id,
                    "start_price": doc.get("start_price"),
                    "end_price": doc.get("end_price"),
                    "start_popularity": doc.get("start_pop"),
                    "end_popularity": doc.get("end_pop"),
                }
            )

            if doc.get("start_pop") is not None and doc.get("end_pop") is not None:
                abs_pop_diff_sum += abs(doc["end_pop"] - doc["start_pop"])
        db["total_change_per_day"].delete_many({"day_id": day_id})
        db["total_change_per_day"].insert_many(to_insert)

        db["total_change_per_day_sums"].delete_many({"day_id": day_id})
        db["total_change_per_day_sums"].insert_one(
            {"day_id": day_id, "abs_pop_diff_sum": abs_pop_diff_sum}
        )


def backfill():
    db = get_db()
    buckets_by_dayid = {}

    for doc in db["popularity"].find().limit(10000):
        if (
            doc.get("popularity") is None
            or doc.get("instrument_id") is None
            or doc.get("timestamp") is None
            or doc["timestamp"].isoweekday() >= 6
        ):
            continue

        day_id = doc["timestamp"].strftime("%Y-%m-%d")
        bucket = buckets_by_dayid.get(day_id)
        if bucket is None:
            buckets_by_dayid[day_id] = {}
            bucket = buckets_by_dayid[day_id]

        instrument_id = doc["instrument_id"]
        acc = bucket.get(instrument_id)
        if acc is None:
            bucket[instrument_id] = {}
            acc = bucket[instrument_id]

        if acc.get("start_pop_timestamp") is None or acc["start_pop_timestamp"] > doc["timestamp"]:
            acc["start_pop_timestamp"] = doc["timestamp"]
            acc["start_pop"] = int(doc["popularity"])

        if acc.get("end_pop_timestamp") is None or acc["end_pop_timestamp"] < doc["timestamp"]:
            acc["end_pop_timestamp"] = doc["timestamp"]
            acc["end_pop"] = int(doc["popularity"])

    for doc in db["quotes"].find().limit(10000):
        if (
            doc.get("instrument_id") is None
            or doc.get("updated_at") is None
            or doc.get("last_trade_price") is None
            or doc["updated_at"].isoweekday() >= 6
        ):
            continue

        day_id = doc["updated_at"].strftime("%Y-%m-%d")
        bucket = buckets_by_dayid.get(day_id)
        if bucket is None:
            buckets_by_dayid[day_id] = {}
            bucket = buckets_by_dayid[day_id]

        instrument_id = doc["instrument_id"]
        acc = bucket.get(instrument_id)
        if acc is None:
            bucket[instrument_id] = {}
            acc = bucket[instrument_id]

        if (
            acc.get("start_price_timestamp") is None
            or acc["start_price_timestamp"] > doc["updated_at"]
        ):
            acc["start_price_timestamp"] = doc["updated_at"]
            acc["start_price"] = float(doc["last_trade_price"])

        if acc.get("end_price_timestamp") is None or acc["end_price_timestamp"] < doc["updated_at"]:
            acc["end_price_timestamp"] = doc["updated_at"]
            acc["end_price"] = float(doc["last_trade_price"])

    save_backfill(db, buckets_by_dayid)


@click.command()
@click.argument("day", type=click.STRING)
def main(day):
    if day == "backfill":
        backfill()
    else:
        populate_day(day)


if __name__ == "__main__":
    main()
