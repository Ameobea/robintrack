import json
import os
import time

SECONDS_BETWEEN_SYMBOLS = 5

CMD = "curl 'https://api.robinhood.com/marketdata/historicals/{}/?bounds=regular&interval=day&span=year' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0' -H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE1ODAyODUwNzQsInRva2VuIjoiRlhDVVJaWVNoQ1VtZG1HTVhreXd5VHBJUGIzU1NuIiwidXNlcl9pZCI6Ijg0MGQ1Yjg5LTczNTktNGYxYi1iYzY0LTE5MTVlYTQzNzM2NyIsImRldmljZV9oYXNoIjoiYzBhMDkxNDRhNDZiNDU5NzBmMTZjYzMyZDE2MjNiYzAiLCJzY29wZSI6IndlYl9saW1pdGVkIiwidXNlcl9vcmlnaW4iOiJVUyIsIm9wdGlvbnMiOnRydWUsImxldmVsMl9hY2Nlc3MiOmZhbHNlfQ.Ws8sZ0FVeDrfpQjDdcGH_e13qzxiiyGJ6fIpBT3tFFoNhLYAurwf2Z91weinxUlANqB9h1VCL6oJsMwA-_yQ1XU72qo0JKXSYbKYxD2DPd8tl14ZLNhNFw89tBfXxHWjhxK0tYVGtZn0zCnUjQY-NndtiIhUT2cwZ16_XelKrBz1xYdL7yHihkzynkVt1HLaiK0rP6VcK5WpnhH9nwEMfSSJG87VhIzcVMDcwWx16r9s3LpkYuv4ApSzMJm47zLVi5aoDigwMFVqaNbn7cHhOty_L3xKectMCu6nZjTFuPLmWuDZtnfPvaGJmysvZZQKcsIQcbmZY7uugUDRHxMdQg' -H 'Origin: https://robinhood.com' -H 'Connection: keep-alive' -H 'Referer: https://robinhood.com/stocks/VIR' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'TE: Trailers' > /Users/cprimozic/Downloads/out/{}.json"

existing = set()
for fname in os.listdir("/Users/cprimozic/Downloads/out"):
    spl = fname.split(".")
    symbol = fname.replace(".{}".format(spl[-1]), "")
    existing.add(symbol)

f = open("/Users/cprimozic/Downloads/all_symbols.json", "r")
raw_json = str(f.read())
parsed = json.loads(raw_json)

for item in parsed:
    symbol = item["symbol"]
    if symbol in existing:
        print("Skipping already downloaded symbol {}".format(symbol))
        continue

    print("Fetching candles for symbol {}".format(symbol))
    res = os.system(CMD.format(symbol, symbol))
    if res != 0:
        print("ERROR fetching symbol {}".format(symbol))
        exit(1)

    time.sleep(SECONDS_BETWEEN_SYMBOLS)
