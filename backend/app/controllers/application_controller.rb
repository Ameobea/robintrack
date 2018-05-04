class ApplicationController < ActionController::Base
  class NotFound < StandardError; end
  class BadRequest < StandardError; end

  rescue_from NotFound do
    render json: { error: "not_found" }, status: :not_found
  end

  rescue_from BadRequest do |message|
    render json: { error: message }, status: :bad_request
  end
end
