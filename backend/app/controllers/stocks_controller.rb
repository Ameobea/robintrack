class StocksController < ApplicationController
  SORT_ASCENDING = 1
  SORT_DESCENDING = -1
  DEFAULT_LIMIT = 50

  def most_popular
    entries = get_popularity_entries(SORT_DESCENDING, limit_param)
    render json: format_popularity_entries(entries)
  end

  def least_popular
    entries = get_popularity_entries(SORT_ASCENDING, limit_param)
    render json: format_popularity_entries(entries)
  end

  def quote
    symbol = params[:id]
    entry = get_quote(symbol)
    render json: { bid: entry["bid_price"].to_f, ask: entry["ask_price"].to_f }
  end

  def quotes
    symbols = params[:symbols].split(',')
    entries = get_quotes(symbols)
    render json: format_quotes(entries)
  end

  def popularity_history
    symbol = params[:id]
    entries = get_popularity_history(symbol)
    render json: format_popularity_history(entries)
  end

  def quote_history
    symbol = params[:id]
    entries = get_quote_history(symbol)
    render json: format_quote_history(entries)
  end

  def limit_param
    params.fetch(:limit, DEFAULT_LIMIT).to_i
  end

  def get_popularity_entries(sort_direction, limit)
    MongoClient[:popularity].find.aggregate([
      { "$sort" => { timestamp: -1 } },
      { "$group" => { _id: "$instrument_id", latest_popularity: { "$first" => "$popularity" } } },
      { "$lookup" => {
        from: "index",
        localField: "_id",
        foreignField: "instrument_id",
        as: "indexes",
      } },
      { "$sort" => { latest_popularity: sort_direction } },
      { "$limit" => limit },
    ])
  end

  def format_popularity_entries(entries)
    entries.map do |entry|
      { popularity: entry["latest_popularity"], symbol: entry["indexes"].first["symbol"] }
    end
  end

  def get_quote(symbol)
    MongoClient[:quotes].find(
      { "symbol": symbol },
      :sort => { "updated_at": -1 },
      :limit => 1
    ).first
  end

  def get_quotes(symbols)
    MongoClient[:quotes].aggregate([
      { "$match" => { "symbol" => { "$in" => symbols } } },
      { "$sort" => { timestamp: -1 } },
      { "$group" => {
        _id: "$symbol",
        latest_bid: { "$first" => "$bid_price" },
        latest_ask: { "$first" => "$ask_price" },
      } },
    ])
  end

  def format_quotes(quotes)
    quotes.reduce({}) {|acc, quote| acc.update(quote["_id"] => {
      bid: quote["latest_bid"].to_f,
      ask: quote["latest_ask"].to_f,
    })}
  end

  def get_popularity_history(symbol)
    MongoClient[:popularity].aggregate([
      { "$lookup" => {
        from: "index",
        localField: "instrument_id",
        foreignField: "instrument_id",
        as: "indexes",
      } },
      { "$match": { "indexes": { "$elemMatch": { "symbol": symbol } } } },
    ])
  end

  def format_popularity_history(entries)
    entries.map do |entry|
      { popularity: entry["popularity"], timestamp: entry["timestamp"].first }
    end
  end

  def get_quote_history(symbol)
    MongoClient[:quotes].find({symbol: symbol}, :sort => { updated_at: -1 })
  end

  def format_quote_history(quotes)
    quotes.map do |quote|
      { bid: quote["bid_price"], ask: quote["ask_price"] }
    end
  end
end
