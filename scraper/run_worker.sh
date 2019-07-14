#!/bin/bash

if [[ "$1" != "popularity" ]] && [[ "$1" != "quote" ]] && [[ "$1" != "fundamentals" ]]; then
	echo "Error: Argument must be either \"popularity\", \"quote\", or \"fundamentals\""
	exit 1
fi

export LC_ALL=C.utf-8
export LANG=C.utf-8
export MONGO_HOST=${MONGO_HOST:-localhost}
export REDIS_HOST=${REDIS_HOST:-localhost}
export RABBITMQ_HOST=${RABBITMQ_HOST:-localhost}
export RABBITMQ_PORT=${RABBITMQ_PORT:-5672}
export PYTHONPATH="${PWD}/../"

until python src/worker.py \
	--mode $1 \
	--rabbitmq_host=$RABBITMQ_HOST \
	--rabbitmq_port=$RABBITMQ_PORT; do
	echo "Popularities scraper exited with code $?.  Restarting in 10 seconds..."
	sleep 10
done
