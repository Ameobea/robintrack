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
  end

  def popularity_history
  end

  def quote_history
  end

  def limit_param
    params.fetch(:limit, DEFAULT_LIMIT).to_i
  end

  def get_popularity_entries(sort_direction, limit)
    MongoClient[:popularity].find.aggregate([
      { "$sort" => { timestamp: -1 } },
      { "$group" => { _id: "$instrument_id", latest_popularity: { "$first" => "$popularity" } } },
      { "$lookup" => { from: "index", localField: "_id", foreignField: "instrument_id", as: "indexes" } },
      { "$sort" => { latest_popularity: sort_direction } },
      { "$limit" => limit },
    ])
  end

  def format_popularity_entries(entries)
    entries.map do |entry|
      { popularity: entry["latest_popularity"], symbol: entry["indexes"].first["symbol"] }
    end
  end
end
