host = ENV["MONGO_HOST"]
port = ENV["MONGO_PORT"]
::MongoClient = Mongo::Client.new(["#{host}:#{port}"], database: "robinhood")
