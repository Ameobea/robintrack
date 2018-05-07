class Quote
  def self.find_by_symbol(symbol)
    MongoClient[:index].aggregate([
      { "$match": { symbol: symbol } },
      { "$lookup": {
        from: "quotes",
        localField: "instrument_id",
        foreignField: "instrument_id",
        as: "quote",
      } },
      { "$unwind": { path: "$quote" } },
      { "$replaceRoot": { newRoot: "$quote" } },
      { "$sort": { updated_at: -1 } },
      { "$limit": 1 },
    ]).first
  end

  def self.search_by_symbol(symbol)
    MongoClient[:index].aggregate([
      { "$match": { symbol: symbol } },
      { "$lookup": {
        from: "quotes",
        localField: "instrument_id",
        foreignField: "instrument_id",
        as: "quote",
      } },
      { "$unwind": { path: "$quote" } },
      { "$replaceRoot": { newRoot: "$quote" } },
      { "$sort": { updated_at: 1 } },
    ])
  end

  def self.search_symbols(symbols)
    MongoClient[:index].aggregate([
      { "$match": { symbol: { "$in": symbols } } },
      { "$lookup": {
        from: "quotes",
        localField: "instrument_id",
        foreignField: "instrument_id",
        as: "quote",
      } },
      { "$unwind": { path: "$quote" } },
      { "$sort": { "quote.updated_at": -1 } },
      { "$group": {
        _id: "$symbol",
        latest_bid: { "$first": "$quote.bid_price" },
        latest_ask: { "$first": "$quote.ask_price" },
      } },
    ])
  end
end
