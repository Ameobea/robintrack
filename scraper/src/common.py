""" Common functionality used by multiple parts of the application. """

import json
import re


def pp_json(x: object) -> None:
    """ Pretty-prints the provided JSON-serializable object. """
    print(json.dumps(x, indent=2, sort_keys=True))


THROTTLE_RGX = r".*Expected available in (\d*\.?\d+) seconds."


def parse_throttle_res(msg: str) -> int:
    """ Given the response of a throttle message, returns the cooldown. """
    match = re.match(THROTTLE_RGX, msg)
    if not match:
        print(
            "ERROR: Unable to parse throttle message.  {}{}".format(msg, "Assuming 1.5 minutes...")
        )
        return 120

    return int(float(match[1]) + 2.0)
