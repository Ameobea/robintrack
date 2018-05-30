from datetime import datetime
from ..utils import parse_updated_at


def test_parse_datetime():
    updated_at = "2018-05-01T20:00:00Z"
    parsed = parse_updated_at(updated_at)

    assert parsed == datetime(2018, 5, 1, 20, 0)
