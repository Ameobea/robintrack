import os

import tweepy

TWITTER_CONSUMER_KEY = os.environ.get("TWITTER_CONSUMER_KEY")
if not TWITTER_CONSUMER_KEY:
    print("Error: The `TWITTER_CONSUMER_KEY` environment variable must be supplied")
    exit(1)

TWITTER_CONSUMER_SECRET = os.environ.get("TWITTER_CONSUMER_SECRET")
if not TWITTER_CONSUMER_SECRET:
    print("Error: The `TWITTER_CONSUMER_SECRET` environment variable must be supplied")
    exit(1)

TWITTER_ACCESS_TOKEN = os.environ.get("TWITTER_ACCESS_TOKEN")
if not TWITTER_ACCESS_TOKEN:
    print("Error: The `TWITTER_ACCESS_TOKEN` environment variable must be supplied")
    exit(1)

TWITTER_ACCESS_TOKEN_SECRET = os.environ.get("TWITTER_ACCESS_TOKEN_SECRET")
if not TWITTER_ACCESS_TOKEN_SECRET:
    print("Error: The `TWITTER_ACCESS_TOKEN_SECRET` environment variable must be supplied")
    exit(1)

auth = tweepy.OAuthHandler(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET)
auth.set_access_token(TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)


def post_tweet(content: str):
    api.update_status(content)
