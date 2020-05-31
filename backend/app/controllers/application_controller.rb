class ApplicationController < ActionController::Base
  class NotFound < StandardError; end
  class BadRequest < StandardError; end

  before_action :rate_limit_by_ip

  def rate_limit_by_ip
    ip = request.headers["X-Forwarded-For"]
    puts ip

    if RateLimiter.should_block_request?(ip)
      render status: :too_many_requests
    else
      RateLimiter.incr_requests(ip)
    end
  end

  rescue_from NotFound do
    render json: { error: "not_found" }, status: :not_found
  end

  rescue_from BadRequest do |message|
    render json: { error: message }, status: :bad_request
  end
end
