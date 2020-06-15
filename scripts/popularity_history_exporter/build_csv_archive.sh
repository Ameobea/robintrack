#!/bin/bash

# USAGE: ./build_poularity_archive.sh output-file.tgz

[ -z "$1" ] && echo "USAGE: ./build_popularity_archive.sh output-file.tar.gz" && exit 1

mkdir /tmp/popularity_export
docker run --rm --net host --name robintrack-popularity-exporter -e "MONGO_HOST=${MONGO_HOST:-localhost}" -v /tmp/popularity_export:/output robintrack-popularity-exporter ./run_exporter.sh /output
tar -czvf $1 /tmp/popularity_export
rm -rf /tmp/popularity_export

echo "Successfully exported popularity history and created archive $1"

