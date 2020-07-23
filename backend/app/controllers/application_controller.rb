class ApplicationController < ActionController::Base
  class NotFound < StandardError; end
  class BadRequest < StandardError; end
  class LockError < StandardError; end

  before_action :rate_limit_by_ip

  def rate_limit_by_ip
    ip = request.headers["X-Forwarded-For"]&.split(', ')&.first || request.remote_ip
    path = request.path

    if ip != nil && RateLimiter.should_block_request?(ip, path)
      render plain: 'Too many requests; please keep scraping to under 1 request every 2 seconds', status: :too_many_requests
    else
      RateLimiter.incr_requests(ip, path)
    end
  end

  rescue_from NotFound do
    render json: { error: "not_found" }, status: :not_found
  end

  rescue_from BadRequest do |message|
    render json: { error: message }, status: :bad_request
  end

  rescue_from LockError do |message|
    render json: { error: "Error acquiring lock of cache entry in timeout window" }, status: :service_unavailable
  end
end
