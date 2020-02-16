"""
Generates a CSV file consisting of popularity data for the past 24 hours for all stocks.
"""

from datetime import datetime, timedelta
import os
from typing import List

import click

from python_common.db import get_db


def write_csv_file(output_dir: str, popularity_history: List[dict]):
    with open(os.path.join(output_dir, "robinhood-popularity.csv"), "w+") as f:
        f.write('"symbol","timestamp","users_holding"\n')

        for datum in popularity_history:
            symbol = datum["symbol"]
            timestamp = datum["timestamp"].replace(microsecond=0)
            users_holding = datum["popularity"]

            f.write(f'"{symbol}","{timestamp.isoformat()}Z",{users_holding}\n')


@click.command()
@click.argument("output-directory", type=click.Path())
def main(output_directory: str):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory, exist_ok=True)

    db = get_db()

    all_index_docs = list(db["index"].find())
    symbol_by_instrument_id = dict()
    for doc in all_index_docs:
        symbol_by_instrument_id[doc["instrument_id"]] = doc["symbol"]

    updates = list(
        filter(
            lambda doc: doc["symbol"] is not None,
            map(
                lambda doc: {**doc, "symbol": symbol_by_instrument_id.get(doc["instrument_id"])},
                db["popularity"].find({"timestamp": {"$gt": datetime.now() - timedelta(hours=25)}}),
            ),
        )
    )

    sorted_updates = sorted(updates, key=lambda doc: f"{doc['symbol']}{doc['timestamp']}")

    write_csv_file(output_directory, sorted_updates)


if __name__ == "__main__":
    main()  # pylint: disable=no-value-for-parameter
