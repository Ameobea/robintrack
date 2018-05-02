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
    if entry
      render json: { bid: entry["bid_price"].to_f, ask: entry["ask_price"].to_f }
    else
      render json: { error: "not_found" }
    end
  end

  def quotes
    symbols = params[:symbols].to_s.split(',')
    entries = get_quotes(symbols)
    render json: format_quotes(entries)
  end

  def popularity_history
    symbol = params[:id]
    entry = get_popularity_history(symbol)
    if entry
      render json: format_popularity_history(entry["popularity_history"])
    else
      render json: { error: "not_found" }
    end
  end

  def quote_history
    symbol = params[:id]
    entries = get_quote_history(symbol)
    if entries.any?
      render json: format_quote_history(entries)
    else
      render json: { error: "not_found" }
    end
  end

  def limit_param
    params.fetch(:limit, DEFAULT_LIMIT).to_i
  end

  def get_popularity_entries(sort_direction, limit)
    MongoClient[:popularity].aggregate([
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
      { symbol: symbol },
      sort: { updated_at: -1 },
      limit: 1,
    ).first
  end

  def get_quotes(symbols)
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

  def format_quotes(quotes)
    quotes.each_with_object({}) do |quote, acc|
      acc[quote["_id"]] = { bid: quote["latest_bid"].to_f, ask: quote["latest_ask"].to_f }
    end
  end

  def get_popularity_history(symbol)
    MongoClient[:index].aggregate([
      { "$match" => { symbol: symbol } },
      { "$lookup" => {
        from: "popularity",
        localField: "instrument_id",
        foreignField: "instrument_id",
        as: "popularity_history",
      } },
      { "$limit" => 1 },
    ]).first
  end

  def format_popularity_history(entries)
    entries.map do |entry|
      { popularity: entry["popularity"], timestamp: entry["timestamp"].first }
    end
  end

  def get_quote_history(symbol)
    MongoClient[:quotes].find({symbol: symbol}, sort: { updated_at: -1 })
  end

  def format_quote_history(quotes)
    quotes.map do |quote|
      { bid: quote["bid_price"].to_f, ask: quote["ask_price"].to_f }
    end
  end
end
