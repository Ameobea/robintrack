#!/bin/bash

# USAGE: ./build_cobined_csv.sh output-file.zip

[ -z "$1" ] && echo "USAGE: ./build_cobined_csv.sh output-file.zip" && exit 1

export MONGO_HOST=${MONGO_HOST:-localhost}

mkdir /tmp/combined_writer
docker run --rm --net host --name robintrack-combined-csv-writer \
  -v /tmp/combined_writer:/combined_output \
  -e "MONGO_HOST=${MONGO_HOST}" \
  robintrack-combined-csv-writer ./run_exporter.sh /combined_output
rm -f $1
zip -r $1 /tmp/combined_writer
rm -rf /tmp/combined_writer

echo "Successfully exported last 24 hours of combined popularity history to CSV and created archive $1"
