#!/bin/bash

# Just the `docker run` command to spawn the Docker container for the backend

docker run -d --name robintrack-backend --net host \
  -e "REDIS_HOST=localhost" \
  -e "MONGO_HOST=localhost" \
  -e "MONGO_PORT=27017" \
  robintrack-backend
