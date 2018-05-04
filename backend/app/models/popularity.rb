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

  def self.largest_popularity_changes(hours_ago, limit)
    popularity_difference_lookup(hours_ago, SORT_DESCENDING, limit, true)
  end

  def self.largest_popularity_decreases(hours_ago, limit)
    popularity_difference_lookup(hours_ago, SORT_ASCENDING, limit)
  end

  def self.largest_popularity_increases(hours_ago, limit)
    popularity_difference_lookup(hours_ago, SORT_DESCENDING, limit)
  end

  def self.popularity_difference_lookup(hours_ago, sort_direction, limit, take_absoute_value = nil)
    if take_absoute_value
      sorter = { "$sort" => { abs_popularity_difference: sort_direction } }
    else
      sorter = { "$sort" => { popularity_difference: sort_direction } }
    end
    MongoClient[:popularity].aggregate([
      { "$match" => { timestamp: { "$gte" => hours_ago.hour.ago.utc } } },
      { "$sort" => { timestamp: -1 } },
      { "$group" => {
        _id: "$instrument_id",
        latest_popularity: { "$first" => "$popularity" },
        old_popularity: { "$last" => "$popularity" },
      } },
      { "$lookup" => {
        from: "index",
        localField: "_id",
        foreignField: "instrument_id",
        as: "indexes",
      } },
      { "$addFields" => { popularity_difference: { "$subtract" => ["$latest_popularity", "$old_popularity"] } } },
      take_absoute_value && { "$addFields" => { abs_popularity_difference: { "$abs" => "$popularity_difference" } } },
      sorter,
      { "$limit" => limit },
    ].compact)
  end
end
