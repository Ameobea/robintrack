require 'redis'
require 'redlock'

redis_uri = "redis://" + ENV.fetch("REDIS_HOST", "localhost")
$redis = Redis.new(url: redis_uri)
Redis.current = Redis.new(url: redis_uri)
$lock_manager = Redlock::Client.new([redis_uri], { retry_count: 38, retry_delay: 500, retry_jitter: 10 })
