import os
from typing import List

import click

from python_common.db import get_db

WINDOWS_RESERVED_FILENAMES = ("CON", "AUX", "LST", "PRN", "NUL", "EOF", "INP", "OUT")

def write_csv_file(output_dir: str, symbol: str, popularity_history: List[dict]):
    prefix = ""
    if str.upper() in WINDOWS_RESERVED_FILENAMES
        prefix = "_"
    with open(os.path.join(output_dir, f"{prefix}{symbol}.csv"), "w+") as f:
        f.write("timestamp,users_holding\n")
        for datum in popularity_history:
            timestamp = datum["timestamp"].replace(microsecond=0)
            users_holding = datum["popularity"]

            f.write(f'"{timestamp}",{users_holding}\n')


@click.command()
@click.argument("output-directory", type=click.Path())
def main(output_directory: str):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory, exist_ok=True)

    db = get_db()

    aggregation_res = db["popularity"].aggregate(
        [
            {"$sort": {"timestamp": 1}},
            {
                "$group": {
                    "_id": "$instrument_id",
                    "popularity_history": {
                        "$push": {"popularity": "$popularity", "timestamp": "$timestamp"}
                    },
                }
            },
            {
                "$lookup": {
                    "from": "index",
                    "localField": "_id",
                    "foreignField": "instrument_id",
                    "as": "indexes",
                }
            },
            {"$addFields": {"symbol": {"$arrayElemAt": ["$indexes.symbol", 0]}}},
            {"$project": {"popularity_history": True, "symbol": True, "_id": True}},
        ],
        allowDiskUse=True,
    )

    written_count = 0
    for datum in aggregation_res:
        symbol = datum.get("symbol")
        if symbol is None:
            continue

        write_csv_file(output_directory, symbol, datum["popularity_history"])
        written_count += 1

    print(f"Finished writing {written_count} CSV files to {output_directory}!")


if __name__ == "__main__":
    main()  # pylint: disable=no-value-for-parameter
