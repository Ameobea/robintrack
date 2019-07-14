#!/bin/sh

export LC_ALL=C.UTF-8
export LANG=C.UTF-8
export MONGO_HOST=${MONGO_HOST:-localhost}
export REDIS_HOST=${REDIS_HOST:-localhost}
export RABBITMQ_HOST=${RABBITMQ_HOST:-localhost}
export RABBITMQ_PORT=${RABBITMQ_PORT:-5672}
export PYTHONPATH="${PWD}/../"

python src/scrape_instruments.py "$@"
