#!/bin/sh

# This script should be run on the host on which the mongo container is running.  It will produce an `export.tar` file in this directory containing the created export.

TMPDIR=`mktemp -d`

docker cp ./export_csv_inner.sh mongo:/usr/bin/export_csv_inner

# This will generate the compressed CSV files in `/tmp` inside the container
docker exec mongo export_csv_inner

docker cp mongo:/tmp/index.csv.gz $TMPDIR/index.csv.gz
docker cp mongo:/tmp/popularity.csv.gz $TMPDIR/popularity.csv.gz
docker cp mongo:/tmp/quotes.csv.gz $TMPDIR/quotes.csv.gz

docker exec mongo rm /tmp/*.csv.gz

tar -cf ./export.tar $TMPDIR

rm -rf $TMPDIR
