class CacheMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    req = Rack::Request.new(env)
    puts req.path
    puts req.params
    cache_path = req.path == "/api/promotions.json"
    no_param = req.params["discounted_by"] == nil

    if cache_path && no_param
      [
        200,
        {"Content-Type" => "application/json"},
        [$redis.get(Product::PROMOTIONS_CACHE_KEY) || ""]
      ]
    else
      @app.call(env)
    end
  end
end
