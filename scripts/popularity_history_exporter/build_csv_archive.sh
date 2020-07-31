#!/bin/bash

# USAGE: ./build_popularity_archive.sh output-file.tar.gz combined.csv

[ -z "$1" ] && echo "USAGE: ./build_popularity_archive.sh /path/to/output-file.tar.gz /path/to/output/combined.csv" && exit 1
[ -z "$2" ] && echo "USAGE: ./build_popularity_archive.sh /path/to/output-file.tar.gz /path/to/output/combined.csv" && exit 1

mkdir /tmp/popularity_export
docker run --net host --rm -it --name robintrack-popularity-exporter \
  -e "MONGO_HOST=${MONGO_HOST:-localhost}" \
  -e "MONGO_PORT=${MONGO_PORT:-27017}" \
  -v /tmp/popularity_export:/output \
  robintrack-popularity-exporter \
  ./run_exporter.sh /output
mv /tmp/popularity_export/combined.csv $2
tar -czvf /tmp/popularity_export.tar.gz /tmp/popularity_export
mv /tmp/popularity_export.tar.gz $1
rm -rf /tmp/popularity_export

echo "Successfully exported popularity history and created archive $1 and output CSV $2"
