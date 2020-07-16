class RateLimiter
  MAX_REQUESTS_PER_PERIOD = 33
  TIME_PERIOD_IN_SECONDS = 45
  BASE_REDIS_KEY = 'request-count-ip'

  def self.should_block_request?(ip, path)
    p path
    if path.starts_with?("/most_popular") || path.starts_with?("/least_popular")
      return false
    end
    recent_requests(ip, path).to_i >= MAX_REQUESTS_PER_PERIOD
  end

  def self.incr_requests(ip, path)
    if path.starts_with?("/most_popular") || path.starts_with?("/least_popular")
      return
    end

    $redis.multi do |multi|
      key = redis_key(ip, path)
      multi.incr(key)
      multi.expire(key, TIME_PERIOD_IN_SECONDS)
    end
  end

  def self.recent_requests(ip, path)
    $redis.get(redis_key(ip, path))
  end

  def self.block_requests(ip, seconds = TIME_PERIOD_IN_SECONDS)
    $redis.set(redis_key(ip, path), MAX_REQUESTS_PER_PERIOD, ex: seconds)
  end

  def self.redis_key(ip, path)
    path = path.starts_with?("/stocks/") ? path.split("/")[3] : path
    "#{BASE_REDIS_KEY}-#{ip}-#{path}-#{TIME_PERIOD_IN_SECONDS}-#{Time.current.to_i / TIME_PERIOD_IN_SECONDS}"
  end
end
