""" Bot mode that retrieves the top popularity changes from Robintrack and makes Stocktwits posts
about them. """

from time import sleep
from typing import Callable, Iterable, Optional

import requests

from stocktwits_api import post_twit
from twitter_api import post_tweet

API_URL_BASE = "https://robintrack.net/api"


TOP_PERCENT_POPULARITY_CHANGES_URL = (
    f"{API_URL_BASE}/largest_popularity_changes?hours_ago=24"
    "&limit=10&percentage=true&min_popularity=50"
)

TOP_ABSOLUTE_POPULARITY_INCREASES_URL = (
    f"{API_URL_BASE}/largest_popularity_increases?hours_ago=24&limit=10&percentage=false"
)

TOP_ABSOLUTE_POPULARITY_DECREASES_URL = (
    f"{API_URL_BASE}/largest_popularity_decreases?hours_ago=24&limit=10&percentage=false"
)

TWIT_POST_DELAY = 30
TWEET_POST_DELAY = 10


def create_percent_change_twit_content(
    changes: Iterable[dict], indices_to_tag: Iterable[int], truncate: Optional[bool]
) -> str:
    i = -1
    lines = []
    for change in changes:
        i += 1
        if change["symbol"] is None:
            continue

        symbol = change["symbol"]
        change_percent = change["popularity_difference"]
        change_diff = change["end_popularity"] - change["start_popularity"]
        change_symbol = "+" if change_diff >= 0 else ""

        # If truncating, only show absolute change for the first 5
        absolute_change_string = "" if truncate and i >= 5 else f" ({change_symbol}{change_diff})"
        number_marker = "" if truncate else f"{i+1}. "
        lines.append(
            (
                f"{number_marker}{'$' if i in indices_to_tag else ''}{symbol}: "
                f"{change_symbol}{int(change_percent)}%"
            )
            + absolute_change_string
        )

    header = (
        "Top percentage changes in # users holding for stocks held by Robinhood traders today:\n\n"
    )
    header += "https://robintrack.net/popularity_changes?hoursAgo=24&relative=true\n\n"
    body = "\n".join(lines)

    return header + body


def create_absolute_change_twit_content(
    changes: Iterable[dict], indices_to_tag: Iterable[int], hide_subheader: Optional[bool]
) -> str:
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
                f"{i+1}. {'$' if i in indices_to_tag else ''}{symbol}: "
                f"{'+' if change_diff >= 0 else ''}{change_diff}"
            )
        )

    change_type = "increases" if changes[0]["popularity_difference"] >= 0 else "decreases"
    header = (
        f"Top {change_type} in # users holding " "for stocks held by Robinhood traders today:\n\n"
    )

    if not hide_subheader:
        header += "View the full list and history for all symbols on Robintrack: \n\n"

    header += (
        "https://robintrack.net/popularity_changes"
        f"?hoursAgo=24&relative=false&changeType={change_type}\n\n"
    )
    body = "\n".join(lines)

    return header + body


def post_twit_from_changes(
    changes: Iterable[dict], map_changes_to_twit_msg_content: Callable, dry_run: bool
):
    for indices_to_tag in (range(0, 5), range(5, 10)):
        msg = map_changes_to_twit_msg_content(changes, indices_to_tag, False)
        if not dry_run:
            post_twit(msg)
        print(msg, len(msg))

        if not dry_run:
            sleep(TWIT_POST_DELAY)


def post_tweet_from_changes(
    changes: Iterable[dict], map_changes_to_twit_msg_content: Callable, dry_run: bool
):
    msg = map_changes_to_twit_msg_content(changes, range(0, len(changes)), True)
    if not dry_run:
        post_tweet(msg)
    print(msg, len(msg))

    if not dry_run:
        sleep(TWEET_POST_DELAY)


def run_top_popularity_changes(dry_run: bool):
    # Fetch the top popularity changes by percent from Robintrack
    top_percent_changes = requests.get(TOP_PERCENT_POPULARITY_CHANGES_URL).json()
    # Post to StockTwits
    post_twit_from_changes(top_percent_changes, create_percent_change_twit_content, dry_run)
    # Post to Twitter
    post_tweet_from_changes(top_percent_changes, create_percent_change_twit_content, dry_run)

    # Fetch the top popularity increases by absolute diff from Robintrack
    top_absolute_increases = requests.get(TOP_ABSOLUTE_POPULARITY_INCREASES_URL).json()
    # Post to StockTwits
    post_twit_from_changes(top_absolute_increases, create_absolute_change_twit_content, dry_run)
    # Post to Twitter
    post_tweet_from_changes(top_absolute_increases, create_absolute_change_twit_content, dry_run)

    # Fetch the top popularity decreases by absolute diff from Robintrack
    top_absolute_decreases = requests.get(TOP_ABSOLUTE_POPULARITY_DECREASES_URL).json()
    # Post to StockTwits
    post_twit_from_changes(top_absolute_decreases, create_absolute_change_twit_content, dry_run)
    # Post to Twitter
    post_tweet_from_changes(top_absolute_decreases, create_absolute_change_twit_content, dry_run)
