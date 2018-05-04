host = ENV["MONGO_HOST"]
port = ENV["MONGO_PORT"]

if Rails.env == "test"
  Mongo::Logger.level = Logger::FATAL
end

::MongoClient = Mongo::Client.new(["#{host}:#{port}"], database: "robinhood")
