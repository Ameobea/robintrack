import datetime

import click

from python_common.db import get_db


@click.command()
@click.argument("day", type=click.STRING)
def main(day):
    day = datetime.datetime.strptime(day, "%Y-%m-%d")
    day = day.replace(tzinfo=datetime.timezone.utc)
    next_day = day + datetime.timedelta(days=1)
    print(f"Getting changes for day {day}")

    db = get_db()

    # index_res = db["index"].find()
    # instrument_data = {}
    # for item in index_res:
    #     instrument_data[item["instrument_id"]] = item

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
        diffs_by_instrument_id[cur_instrument_id]["start_price"] = start_val
        diffs_by_instrument_id[cur_instrument_id]["end_price"] = last_val

    total_pop_diff = 0
    for val in diffs_by_instrument_id.values():
        pop_diff = abs(val["end_popularity"] - val["start_popularity"])
        total_pop_diff += pop_diff

    print(f"TOTAL POP DIFF: {total_pop_diff}")


if __name__ == "__main__":
    main()
