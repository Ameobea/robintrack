from ..utils import parse_instrument_url


def test_parse_instrument_url():
    instrument_url = "https://api.robinhood.com/instruments/f7a777df-9b1f-47f6-a82f-fe2645f663c2/"
    parsed_instrument_id = parse_instrument_url(instrument_url)

    assert parsed_instrument_id == "f7a777df-9b1f-47f6-a82f-fe2645f663c2"
