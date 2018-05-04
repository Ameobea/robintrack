class Quote
  def self.find_by_symbol(symbol)
    MongoClient[:quotes].find(
      { symbol: symbol },
      sort: { updated_at: -1 },
      limit: 1,
    ).first
  end

  def self.search_by_symbol(symbol)
    MongoClient[:quotes].find({symbol: symbol}, sort: { updated_at: 1 })
  end

  def self.search_symbols(symbols)
    MongoClient[:quotes].aggregate([
      { "$match" => { symbol: { "$in" => symbols } } },
      { "$sort" => { timestamp: -1 } },
      { "$group" => {
        _id: "$symbol",
        latest_bid: { "$first" => "$bid_price" },
        latest_ask: { "$first" => "$ask_price" },
      } },
    ])
  end
end
