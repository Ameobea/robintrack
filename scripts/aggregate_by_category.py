"""
Sums up popularity for all stocks by category and computes aggregate popularity history for each category
"""
from datetime import datetime
import os

from python_common.db import get_db


def get_day_id(dt: datetime) -> str:
    return f"{dt.year}-{dt.month:02}-{dt.day:02}"


def get_all_stock_fundamentals():
    """
    Returns a dict mapping instrument id to stock fundamentals
    """

    db = get_db()

    fundamentals_by_instrument_id = dict()
    all_fundamentals = list(db["fundamentals"].find())
    for f in all_fundamentals:
        fundamentals_by_instrument_id[f["instrument_id"]] = f

    return fundamentals_by_instrument_id


def main():
    fundamentals_by_instrument_id = get_all_stock_fundamentals()

    # sector -> instrument_id -> dayId -> popularity
    updates_by_sector = dict()
    # industry -> instrument_id -> dayId -> popularity
    updates_by_industry = dict()
    all_day_ids = set()

    db = get_db()
    for update in db["popularity"].find().sort("timestamp"):
        fundamentals = fundamentals_by_instrument_id.get(update["instrument_id"])
        if fundamentals is None:
            continue

        day_id = get_day_id(update["timestamp"])
        instrument_id = update["instrument_id"]

        sector = fundamentals["sector"]
        if sector is not None:
            if updates_by_sector.get(sector) is None:
                updates_by_sector[sector] = dict()

            if updates_by_sector[sector].get(instrument_id) is None:
                updates_by_sector[sector][instrument_id] = dict()

            if updates_by_sector[sector][instrument_id].get(day_id) is None:
                updates_by_sector[sector][instrument_id][day_id] = update["popularity"]

        industry = fundamentals["sector"]
        if industry is not None:
            if updates_by_industry.get(industry) is None:
                updates_by_industry[industry] = dict()

            if updates_by_industry[industry].get(instrument_id) is None:
                updates_by_industry[industry][instrument_id] = dict()

            if updates_by_industry[industry][instrument_id].get(day_id) is None:
                updates_by_industry[industry][instrument_id][day_id] = update["popularity"]

        if industry is not None and sector is not None:
            if day_id not in all_day_ids:
                print(day_id)

            all_day_ids.add(day_id)

    print("Finished scrolling all updates; starting to aggregate by popularity")

    # sector -> day_id -> popularity
    pop_by_sector = dict()
    # industry -> day_id -> popularity
    pop_by_industry = dict()

    # Sum it all up
    for day_id in sorted(all_day_ids):
        for (sector, updates_by_instrument_id) in updates_by_sector.items():
            if pop_by_sector.get(sector) is None:
                pop_by_sector[sector] = dict()

            pop_by_sector[sector][day_id] = 0

            for (instrument_id, pop_by_day_id) in updates_by_instrument_id.items():
                pop = pop_by_day_id.get(day_id)
                if pop is None:
                    continue

                pop_by_sector[sector][day_id] += pop

        for (industry, updates_by_instrument_id) in updates_by_industry.items():
            if pop_by_industry.get(industry) is None:
                pop_by_industry[industry] = dict()

            pop_by_industry[industry][day_id] = 0

            for (instrument_id, pop_by_day_id) in updates_by_instrument_id.items():
                pop = pop_by_day_id.get(day_id)
                if pop is None:
                    continue

                pop_by_industry[industry][day_id] += pop

    # Dump it all to CSV, one for each sector
    if not os.path.isdir("/tmp/out"):
        os.mkdir("/tmp/out")

    for (sector, vals) in pop_by_sector.items():
        # Adapted from https://stackoverflow.com/a/295152/3833068
        normalized_sector = "".join(
            x for x in sector.replace(" ", "-").replace("&", "and") if x.isalnum() or x == "-"
        )
        with open(f"/tmp/out/sector_{normalized_sector}.csv", "w") as f:
            for (day_id, pop) in sorted(vals.items(), key=lambda x: x[0]):
                f.write(f"{day_id},{pop}\n")

    for (sector, vals) in pop_by_industry.items():
        # Adapted from https://stackoverflow.com/a/295152/3833068
        normalized_industry = "".join(
            x for x in sector.replace(" ", "-").replace("&", "and") if x.isalnum() or x == "-"
        )
        with open(f"/tmp/out/industry_{normalized_industry}.csv", "w") as f:
            for (day_id, pop) in sorted(vals.items(), key=lambda x: x[0]):
                f.write(f"{day_id},{pop}\n")


main()
