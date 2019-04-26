class Index
  def self.get_symbol_metadata(symbol)
    MongoClient[:index].find(:symbol => symbol).first
  end
end
