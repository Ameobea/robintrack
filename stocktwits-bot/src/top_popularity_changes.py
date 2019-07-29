""" Bot mode that retrieves the top popularity changes from Robintrack and makes Stocktwits posts
about them. """

from time import sleep
from typing import Callable, Iterable

import requests

from stocktwits_api import post_twit

API_URL_BASE = "https://robintrack.net/api"


TOP_PERCENT_POPULARITY_CHANGES_URL = (
    f"{API_URL_BASE}/largest_popularity_changes?hours_ago=24"
    "&limit=10&percentage=true&min_popularity=200"
)

TOP_ABSOLUTE_POPULARITY_INCREASES_URL = (
    f"{API_URL_BASE}/largest_popularity_increases?hours_ago=24&limit=10&percentage=false"
)

TOP_ABSOLUTE_POPULARITY_DECREASES_URL = (
    f"{API_URL_BASE}/largest_popularity_decreases?hours_ago=24&limit=10&percentage=false"
)


def create_percent_change_twit_content(changes: Iterable[dict], *_args) -> str:
    i = -1
    lines = []
    for change in changes:
        i += 1
        if change["symbol"] is None:
            continue

        symbol = change["symbol"]
        change_percent = change["popularity_difference"]
        change_diff = change["end_popularity"] - change["start_popularity"]
        change_symbol = '+' if change_diff >= 0 else ''

        lines.append(
            (
                f"#{i+1}. ${symbol}: "
                f"{change_symbol}{int(change_percent)}% ({change_symbol}{change_diff})"
            )
        )

    header = "Top percentage changes in popularity for stocks held by Robinhood traders today:\n\n"
    body = "\n".join(lines)
    footer = (
        "\n\nView the full list and popularity history stats for all symbols on Robintrack: \n"
        "https://robintrack.net/popularity_changes?hoursAgo=24&relative=true"
    )

    return header + body + footer


def create_absolute_change_twit_content(changes: Iterable[dict]) -> str:
    i = -1
    lines = []
    for change in changes:
        i += 1
        if change["symbol"] is None:
            continue

        symbol = change["symbol"]
        change_diff = change["popularity_difference"]

        lines.append(
            (
                f"#{i+1}. ${symbol}: "
                f"{'+' if change_diff >= 0 else ''}{change_diff}"
            )
        )

    change_type = 'increases' if change_diff >= 0 else 'decreases'
    header = (
        f"Top {change_type} in popularity "
        "for stocks held by Robinhood traders today:\n\n"
    )
    body = "\n".join(lines)
    footer = (
        "\n\nView the full list and popularity history for all symbols on Robintrack: \n"
        "https://robintrack.net/popularity_changes"
        f"?hoursAgo=24&relative=false&changeType={change_type}"
    )

    return header + body +  footer


def post_twit_from_changes(
    changes: Iterable[dict], map_changes_to_twit_msg_content: Callable, dry_run: bool
):
    msg = map_changes_to_twit_msg_content(changes)
    if not dry_run:
        post_twit(msg)
    print(msg, len(msg))
    sleep(3)


def run_top_popularity_changes(dry_run: bool):
    # Fetch the top popularity changes by percent from Robintrack
    top_percent_changes = requests.get(TOP_PERCENT_POPULARITY_CHANGES_URL).json()
    post_twit_from_changes(top_percent_changes, create_percent_change_twit_content, dry_run)

    # Fetch the top popularity increases by absolute diff from Robintrack
    top_absolute_increases = requests.get(TOP_ABSOLUTE_POPULARITY_INCREASES_URL).json()
    post_twit_from_changes(top_absolute_increases, create_absolute_change_twit_content, dry_run)

    # Fetch the top popularity decreases by absolute diff from Robintrack
    top_absolute_decreases = requests.get(TOP_ABSOLUTE_POPULARITY_DECREASES_URL).json()
    post_twit_from_changes(top_absolute_decreases, create_absolute_change_twit_content, dry_run)
