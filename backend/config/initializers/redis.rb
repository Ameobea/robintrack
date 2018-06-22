require 'redis'

$redis = Redis.new(url: "redis://" + ENV.fetch("REDIS_URL", "localhost"))
