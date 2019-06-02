#!/bin/bash

# USAGE: ./create_poularity_archive.sh output-file.tgz

docker run -i --name robintrack-popularity-exporter -v /tmp/popularity_export:/output --rm ./run_exporter.sh /output
tar -czvf $1 /tmp/popularity_export
rm -rf /tmp/popularity_export

echo "Successfully exported popularity history and created archive $1"

