#!/bin/sh

# Just the docker run commands used to start up the worker instances
docker run -d --net host --name robintrack-scraper-popularity \
  -e "ROBINHOOD_PASSWORD=$ROBINHOOD_PASSWORD" \
  -e "ROBINHOOD_USERNAME=$ROBINHOOD_USERNAME" \
  robintrack-scraper \
  ./run_worker.sh popularity
docker run -d --net host --name robintrack-scraper-quotes \
  robintrack-scraper \
  ./run_worker.sh quote
