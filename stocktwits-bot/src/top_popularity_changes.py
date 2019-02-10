""" Bot mode that retrieves the top popularity changes from Robintrack and makes Stocktwits posts
about them. """

from time import sleep
from typing import Callable, Iterable

import requests

from stocktwits_api import post_twit


TOP_PERCENT_POPULARITY_CHANGES_URL = (
    "https://robintrack.net/api/largest_popularity_changes?hours_ago=24"
    "&limit=10&percentage=true&min_popularity=200&start_index=0"
)

TOP_ABSOLUTE_POPULARITY_INCREASES_URL = (
    "https://robintrack.net/api/largest_popularity_changes?hours_ago=24"
    "&limit=10&percentage=false&start_index=0"
)

TOP_ABSOLUTE_POPULARITY_DECREASES_URL = (
    "https://robintrack.net/api/largest_popularity_decreases?hours_ago=24"
    "&limit=10&percentage=false&start_index=0"
)


def create_percent_change_twit_content(change: dict, *_args) -> str:
    symbol = change["symbol"]
    change_percent = change["popularity_difference"]
    change_diff = change["end_popularity"] - change["start_popularity"]

    return (
        f"The number of users holding ${symbol} on Robinhood "
        f"{'increased' if change_percent >= 0 else 'decreased'} by "
        f"{int(change_percent)}% ({'+' if change_diff >= 0 else ''}{change_diff}) "
        f"today: https://robintrack.net/symbol/{symbol}"
    )


def create_absolute_change_twit_content(change: dict, i: int) -> str:
    symbol = change["symbol"]
    change_diff = change["popularity_difference"]

    return (
        f"${symbol} is #{i+1} for {'increases' if change_diff >= 0 else 'decreases'} "
        f"in the number of users holding shares on Robinhood today, changing by {change_diff}: "
        f"https://robintrack.net/symbol/{symbol}"
    )


def post_twits_from_changes(changes: Iterable[dict], map_change_to_twit_msg_content: Callable):
    for i, change in enumerate(changes):
        if change["symbol"] is None:
            continue

        msg = map_change_to_twit_msg_content(change, i)
        post_twit(msg)
        print(msg, len(msg))
        sleep(3)


def run_top_popularity_changes():
    # Fetch the top popularity changes by percent from Robintrack
    top_percent_changes = requests.get(TOP_PERCENT_POPULARITY_CHANGES_URL).json()
    post_twits_from_changes(top_percent_changes, create_percent_change_twit_content)

    # Fetch the top popularity increases by absolute diff from Robintrack
    top_absolute_increases = requests.get(TOP_ABSOLUTE_POPULARITY_INCREASES_URL).json()
    post_twits_from_changes(top_absolute_increases, create_absolute_change_twit_content)

    # Fetch the top popularity decreases by absolute diff from Robintrack
    top_absolute_decreases = requests.get(TOP_ABSOLUTE_POPULARITY_DECREASES_URL).json()
    post_twits_from_changes(top_absolute_decreases, create_absolute_change_twit_content)
