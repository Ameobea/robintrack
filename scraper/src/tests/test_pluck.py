import json
from os import path

from ..utils import pluck, DESIRED_QUOTE_KEYS


def test_pluck():
    dictionary = {"a": 1, "b": "foo", "c": {"d": 1}, "e": None}
    plucked = pluck(["a", "c", "e"], dictionary)

    assert plucked == {"a": 1, "c": {"d": 1}, "e": None}


def test_pluck_quote_doc():
    with open(path.join(path.dirname(__file__), "./raw_quote.json")) as json_file:
        raw_quote_dict = json.load(json_file)
        plucked = {
            **pluck(DESIRED_QUOTE_KEYS, raw_quote_dict),
            "instrument_id": raw_quote_dict["instrument_id"],
        }

        assert plucked == {
            "instrument_id": "f7a777df-9b1f-47f6-a82f-fe2645f663c2",
            "bid_price": "18.9000",
            "ask_price": "35.9000",
            "bid_size": 100,
            "ask_size": 100,
            "updated_at": "2018-05-01T20:00:00Z",
            "last_trade_price": "27.0000",
            "last_extended_hours_trade_price": None,
        }
