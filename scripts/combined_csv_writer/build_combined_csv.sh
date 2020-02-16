#!/bin/bash

# USAGE: ./build_cobined_csv.sh output-file.zip

[ -z "$1" ] && echo "USAGE: ./build_cobined_csv.sh output-file.zip" && exit 1

export MONGO_HOST=${MONGO_HOST:-localhost}

mkdir /tmp/popularity_export
docker run --rm --net host --name robintrack-combined-csv-writer \
  -v /tmp/popularity_export:/output \
  -e "MONGO_HOST=${MONGO_HOST}" \
  robintrack-combined-csv-writer ./run_exporter.sh /output
zip -r $1 /tmp/popularity_export
rm -rf /tmp/popularity_export

echo "Successfully exported last 24 hours of combined popularity history to CSV and created archive $1"
