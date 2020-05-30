class RateLimiter

  MAX_REQUESTS_PER_PERIOD = 700
  TIME_PERIOD_IN_SECONDS = 60
  BASE_REDIS_KEY = 'request-count-ip'

  def self.should_block_request?(ip)
    recent_requests(ip).to_i >= MAX_REQUESTS_PER_PERIOD
  end

  def self.incr_requests(ip)
    Redis.current.multi do |multi|
      multi.incr(redis_key(ip))
      multi.expire(redis_key(ip), TIME_PERIOD_IN_SECONDS)
    end
  end

  def self.recent_requests(ip)
    Redis.current.get(redis_key(ip))
  end

  def self.block_requests(ip, seconds = TIME_PERIOD_IN_SECONDS)
    Redis.current.set(redis_key(ip), MAX_REQUESTS_PER_PERIOD, ex: seconds)
  end

  def self.redis_key(ip)
    "#{BASE_REDIS_KEY}-#{ip}-#{TIME_PERIOD_IN_SECONDS}-#{Time.current.to_i / TIME_PERIOD_IN_SECONDS}"
  end

end
