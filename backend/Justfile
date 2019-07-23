spawn_docker:
  #!/usr/bin/env bash
  [ -z "$SECRET_KEY_BASE" ] && echo "You must set the SECRET_KEY_BASE environment variable" && exit 1

  docker stop robintrack-backend
  docker rm robintrack-backend
  docker run -d --name robintrack-backend \
    --net host \
    -p 4000:4000 \
    -e "REDIS_HOST=${REDIS_HOST:-localhost}" \
    -e "MONGO_HOST=${MONGO_HOST:-localhost}" \
    -e "MONGO_PORT=${MONGO_PORT:-27017}" \
    -e "SECRET_KEY_BASE=${SECRET_KEY_BASE}" \
    robintrack-backend

build_docker:
	docker build -t robintrack-backend .

ssh_tunnel:
  ssh -L 27017:ameo.design:27017 -L 6379:ameo.design:6379 root@ameo.design

start_server:
  ./bin/rails s -p 4000
