from functools import reduce
from typing import List


DESIRED_QUOTE_KEYS = ['bid_price', 'ask_price', 'bid_size', 'ask_size', 'updated_at',
                      'last_trade_price', 'last_extended_hours_trade_price']


def pluck(keys: List[str], dictionary: dict) -> dict:
    def pluck_inner(acc: dict, pair) -> dict:
        (key, value) = pair
        return {**acc, key: value} if key in keys else acc

    return reduce(pluck_inner, dictionary.items(), {})
