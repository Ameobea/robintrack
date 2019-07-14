from datetime import datetime
from functools import reduce
from typing import List


DESIRED_QUOTE_KEYS = [
    "bid_price",
    "ask_price",
    "bid_size",
    "ask_size",
    "updated_at",
    "last_trade_price",
    "last_extended_hours_trade_price",
]


def pluck(keys: List[str], dictionary: dict) -> dict:
    def pluck_inner(acc: dict, pair) -> dict:
        (key, value) = pair
        return {**acc, key: value} if key in keys else acc

    return reduce(pluck_inner, dictionary.items(), {})


UPDATED_AT_TIME_FORMAT_STRING = "%Y-%m-%dT%H:%M:%SZ"


def parse_updated_at(updated_at: str) -> datetime:
    return datetime.strptime(updated_at, UPDATED_AT_TIME_FORMAT_STRING)


INSTRUMENT_ID_RGX = r"https://api.robinhood.com/instruments/(.+?)/"


def parse_instrument_url(instrument_url: str) -> str:
    return instrument_url.split("instruments/")[1][:-1]


def build_instrument_url(instrument_id: str) -> str:
    return f"https://api.robinhood.com/instruments/{instrument_id}/"


def omit(k, d: dict) -> dict:
    new_d = {**d}
    new_d.__delitem__(k)
    return new_d
