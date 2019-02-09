from os import environ

from pymongo import MongoClient
import redis

MONGO_USER = environ.get("MONGO_USER") or ""
MONGO_PASSWORD = environ.get("MONGO_PASSWORD") or ""
MONGO_HOST = environ.get("MONGO_HOST") or "localhost"
MONGO_PORT = int(environ["MONGO_PORT"]) if environ.get("MONGO_PORT") else 27017
REDIS_HOST = environ.get("REDIS_HOST") or "localhost"
REDIS_PORT = int(environ.get("REDIS_PORT") or "6379")

mongo_url = "mongodb://{}{}{}{}{}:{}/".format(
    MONGO_USER,
    "" if MONGO_PASSWORD == "" else ":",
    MONGO_PASSWORD,
    "" if MONGO_USER == "" else "@",
    MONGO_HOST,
    MONGO_PORT,
)
mongo_client = MongoClient(mongo_url)

redis_client = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT, db=0)


def get_db():
    """ Returns an instance of the MongoDB database for this project. """

    return mongo_client["robinhood"]
