""" Bot mode that retrieves the top popularity changes from Robintrack and makes Stocktwits posts
about them. """

from time import sleep

import requests

from stocktwits_api import post_twit


POPULARITY_CHANGES_URL = (
    "https://robintrack.net/api/largest_popularity_changes?hours_ago=24"
    "&limit=10&percentage=true&min_popularity=200&start_index=0"
)


def create_twit_content(change: dict) -> str:
    symbol = change["symbol"]
    change_percent = change["popularity_difference"]
    change_diff = change["end_popularity"] - change["start_popularity"]
    return f"The number of users holding ${symbol} on Robinhood {'increased' if change_percent >= 0 else 'decreased'} by {int(change_percent)}% ({'+' if change_diff >= 0 else ''}{change_diff}) today: https://robintrack.net/symbol/{symbol}"


def run_top_popularity_changes():
    # Fetch the top popularity changes from Robintrack
    top_changes = requests.get(POPULARITY_CHANGES_URL).json()
    for change in top_changes:
        if change["symbol"] is None:
            continue

        msg = create_twit_content(change)
        post_twit(msg)
        sleep(3)
