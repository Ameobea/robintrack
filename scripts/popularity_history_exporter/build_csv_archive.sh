#!/bin/bash

# USAGE: ./build_poularity_archive.sh output-file.tar.xz combined.csv

[ -z "$1" ] && echo "USAGE: ./build_popularity_archive.sh /path/to/output-file.tar.xz /path/to/output/combined.csv" && exit 1
[ -z "$2" ] && echo "USAGE: ./build_popularity_archive.sh /path/to/output-file.tar.xz /path/to/output/combined.csv" && exit 1

mkdir /tmp/popularity_export
docker run --rm --net host --name robintrack-popularity-exporter \
  -e "MONGO_HOST=${MONGO_HOST:-localhost}" \
  -v /tmp/popularity_export:/output \
  robintrack-popularity-exporter \
  ./run_exporter.sh /output
mv /tmp/popularity_export/combined.csv $2
tar -cJvf $1 /tmp/popularity_export
rm -rf /tmp/popularity_export

echo "Successfully exported popularity history and created archive $1 and output CSV $2"
