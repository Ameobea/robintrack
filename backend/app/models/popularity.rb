class Popularity
  SORT_ASCENDING = 1
  SORT_DESCENDING = -1

  def self.most_popular(limit)
    sort_by_popularity(SORT_DESCENDING, limit)
  end

  def self.least_popular(limit)
    sort_by_popularity(SORT_ASCENDING, limit)
  end

  def self.sort_by_popularity(sort_direction, limit)
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

  def self.get_history_for_symbol(symbol)
    entry = MongoClient[:index].aggregate([
      { "$match" => { symbol: symbol } },
      { "$lookup" => {
        from: "popularity",
        localField: "instrument_id",
        foreignField: "instrument_id",
        as: "popularity_history",
      } },
      { "$limit" => 1 },
    ]).first
    entry && entry["popularity_history"]
  end
end
