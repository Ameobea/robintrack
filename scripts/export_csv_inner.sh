#!/bin/sh

# This script is meant to be copied inside the Docker container running the MongoDB instance and run from there

mongoexport --db robinhood --type=csv --fields instrument,simple_name,instrument_id --collection index | gzip > /tmp/index.csv.gz
mongoexport --db robinhood --type=csv --fields timestamp,instrument_id,popularity --collection popularity | gzip > /tmp/popularity.csv.gz
mongoexport --db robinhood --type=csv --fields instrument_id,ask_price,bid_price,ask_size,bid_size,last_trade_price,updated_at --collection quotes | gzip > /tmp/quotes.csv.gz

