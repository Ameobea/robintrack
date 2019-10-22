docker-build:
  docker build -t robintrack-stocktwits-bot:latest .

docker-debug:
  docker run \
    -it \
    --net host \
    -e "STOCKTWITS_ACCESS_TOKEN=$STOCKTWITS_ACCESS_TOKEN" \
    -e "STOCKTWITS_BOT_MODE=$STOCKTWITS_BOT_MODE" \
    -e "TWITTER_CONSUMER_KEY=$TWITTER_CONSUMER_KEY" \
    -e "TWITTER_CONSUMER_SECRET=$TWITTER_CONSUMER_SECRET" \
    -e "TWITTER_ACCESS_TOKEN=$TWITTER_ACCESS_TOKEN" \
    -e "TWITTER_ACCESS_TOKEN_SECRET=$TWITTER_ACCESS_TOKEN_SECRET" \
    robintrack-stocktwits-bot \
    sh
