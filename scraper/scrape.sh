#!/bin/bash

if [[ "$1" != "popularity" ]] && [[ "$1" != "quote" ]]; then
  echo "Error: Argument must be either "popularity" or "quote".";
  exit 1;
fi

export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export MONGO_HOST="mail2.ameo.link"
export REDIS_HOST="mail2.ameo.link"

until python src/worker.py \
        --mode $1 \
        --rabbitmq_host="mail2.ameo.link" \
        --rabbitmq_port=5672; do
  echo "Popularities scraper exited with code $?.  Restarting..."
  sleep 1
done
