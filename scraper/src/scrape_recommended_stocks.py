import json
import os
import time

from db import get_db

SECONDS_BETWEEN_SYMBOLS = 4

BEARER_TOKEN = os.environ.get("BEARER_TOKEN")

if BEARER_TOKEN is None:
    print("The `BEARER_TOKEN` environment variable must be set")
    exit(1)

db = get_db()


def get_uuid_for_symbol(symbol: str) -> str:
    doc = db["index"].find_one({"symbol": symbol})
    if doc is None:
        return None
    return doc["instrument_id"]


CMD = "curl 'https://dora.robinhood.com/instruments/similar/{}/' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0' -H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Authorization: Bearer {}' -H 'Origin: https://robinhood.com' -H 'Connection: keep-alive' -H 'Referer: https://robinhood.com/stocks/VIR' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'TE: Trailers' > /home/casey/Downloads/out/{}.json"

existing = set()
for fname in os.listdir("/home/casey/Downloads/out"):
    spl = fname.split(".")
    symbol = fname.replace(".{}".format(spl[-1]), "")
    existing.add(symbol)

f = open("/home/casey/Downloads/all_symbols.json", "r")
raw_json = str(f.read())
parsed = json.loads(raw_json)

for item in parsed:
    symbol = item["symbol"]
    if symbol in existing:
        print("Skipping already downloaded symbol {}".format(symbol))
        continue

    instrument_id = get_uuid_for_symbol(symbol)
    if instrument_id is None:
        print("No index entry found for symbol {}".format(symbol))
        continue

    print(
        "Fetching recommended symbols for symbol {} instrument ID {}".format(symbol, instrument_id)
    )
    res = os.system(CMD.format(instrument_id, BEARER_TOKEN, symbol))
    if res != 0:
        print("ERROR fetching symbol {}".format(symbol))
        exit(1)

    time.sleep(SECONDS_BETWEEN_SYMBOLS)
