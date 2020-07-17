host = ENV["MONGO_HOST"] || "localhost"
port = ENV["MONGO_PORT"] || "27017"

if Rails.env == "test"
  Mongo::Logger.level = Logger::FATAL
end

::MongoClient = Mongo::Client.new(["#{host}:#{port}"], database: "robinhood", max_pool_size: 20)
