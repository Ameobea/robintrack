class Popularity
  SORT_ASCENDING = 1
  SORT_DESCENDING = -1

  def self.most_popular(limit, start_index)
    sort_by_popularity(SORT_DESCENDING, limit, start_index)
  end

  def self.least_popular(limit, start_index)
    sort_by_popularity(SORT_ASCENDING, limit, start_index)
  end

  def self.total_symbols(hours_ago = nil)
    MongoClient[:popularity].aggregate([
      hours_ago && { "$match" => { timestamp: { "$gte": hours_ago.hours.ago } } },
      { "$group" => { _id: "$instrument_id" } },
      { "$count" => "total_symbols" },
    ].compact).first
  end

  def self.sort_by_popularity(sort_direction, limit, start_index)
    res = MongoClient[:popularity].aggregate([
      { "$match" => { timestamp: { "$gte": 2.hour.ago } } },
      { "$sort" => { timestamp: -1 } },
      { "$group" => { _id: "$instrument_id", latest_popularity: { "$first" => "$popularity" } } },
      { "$sort" => { latest_popularity: sort_direction, symbol: SORT_ASCENDING } },
      { "$skip" => start_index },
      { "$limit" => limit },
    ]).to_a

    all_instrument_ids = res.map { |elem| elem[:instrument_id] }
    data_by_instrument_id = MongoClient[:index]
      .find(
        { instrument_id: { "$in": all_instrument_ids } },
        projection: { _id: 0, instrument_id: 1, simple_name: 1, symbol: 1 }
      )
      .reduce({}) do |acc, x|
        acc[x[:instrument_id]] = x
        acc
      end

    res.map do |elem|
      data_for_instrument = data_by_instrument_id[elem[:instrument_id]]
      { symbol: data_for_instrument[:symbol], name: data_for_instrument[:simple_name], popularity: latest_popularity }
    end
  end

  def self.get_ranking(symbol)
    instrument = MongoClient[:index].find({ symbol: symbol }).first
    if !instrument
      return nil
    end
    instrument_id = instrument[:instrument_id]

    MongoClient[:popularity].aggregate([
      { "$match" => { timestamp: { "$gte": 2.hour.ago } } },
      { "$sort" => { timestamp: -1 } },
      { "$group" => {
        _id: "$instrument_id",
        instrument_id: { "$first" => "$instrument_id" },
        latest_popularity: { "$first" => "$popularity" }
      } },
      { "$sort" => { latest_popularity: SORT_DESCENDING } },
      { "$group" => { _id: 1, instrument_id: { "$push" => "$instrument_id" } } },
      { "$unwind" => { path: "$instrument_id", includeArrayIndex: "ranking" } },
      { "$match" => { instrument_id: instrument_id } },
      { "$addFields" => { ranking: { "$add" => ["$ranking", 1] }, symbol: symbol } },
      { "$limit" => 1 },
    ]).first
  end

  def self.get_history_for_symbol(symbol, start_date, end_date)
    instrument = MongoClient[:index].find({ symbol: symbol }).first
    if !instrument
      return nil
    end
    instrument_id = instrument[:instrument_id]

    query = { instrument_id: instrument_id }
    if start_date
      query[:timestamp] = { "$gte": start_date }
    end
    if end_date
      if !query[:timestamp]
        query[:timestamp] = {}
      end

      query[:timestamp]["$lte"] = end_date
    end

    MongoClient[:popularity].find(query).to_a
  end

  def self.largest_popularity_changes(options)
    options = options.merge(sort_direction: SORT_DESCENDING, take_absoute_value: true)
    popularity_difference_lookup(options)
  end

  def self.largest_popularity_decreases(options)
    popularity_difference_lookup(options.merge(sort_direction: SORT_ASCENDING))
  end

  def self.largest_popularity_increases(options)
    popularity_difference_lookup(options.merge(sort_direction: SORT_DESCENDING))
  end

  def self.popularity_difference_lookup(options)
    hours_ago          = options[:hours_ago]
    sort_direction     = options[:sort_direction]
    limit              = options[:limit]
    take_absoute_value = options[:take_absoute_value]
    percentage         = options[:percentage]
    min_popularity     = options[:min_popularity]
    start_index        = options[:start_index]

    difference_query = if percentage
      { "$cond" => [
        { "$eq" => ["$start_popularity", 0] },
        nil,
        { "$multiply" => [100, { "$divide" => [{ "$subtract" => ["$end_popularity", "$start_popularity"] }, "$start_popularity"] }] },
      ]}
    else
      { "$subtract" => ["$end_popularity", "$start_popularity"] }
    end

    if take_absoute_value
      sort_field = :abs_popularity_difference
      sorter = { "$sort" => { diff_is_null: SORT_ASCENDING, abs_popularity_difference: sort_direction } }
    else
      sort_field = :popularity_difference
      sorter = { "$sort" => { diff_is_null: SORT_ASCENDING, popularity_difference: sort_direction } }
    end

    add_fields_query = {
      diff_is_null: { "$eq" => [{ "$type" => "$#{sort_field}" }, "null"] },
      popularity_difference: difference_query
    }
    if take_absoute_value
      add_fields_query[:abs_popularity_difference] = { "$abs" => difference_query }
    end

    res = MongoClient[:popularity].aggregate([
      { "$match" => { timestamp: { "$gte" => hours_ago.hour.ago } } },
      { "$sort" => { timestamp: -1 } },
      { "$group" => {
        _id: "$instrument_id",
        end_popularity: { "$first" => "$popularity" },
        start_popularity: { "$last" => "$popularity" },
      } },
      min_popularity && { "$match" => { start_popularity: { "$gte" => min_popularity } } },
      { "$addFields" => add_fields_query },
      sorter,
      { "$skip" => start_index },
      { "$limit" => limit },
    ].compact).to_a

    all_instrument_ids = res.map { |elem| elem[:_id] }
    data_by_instrument_id = MongoClient[:index]
      .find(
        { instrument_id: { "$in": all_instrument_ids } },
        projection: { _id: 0, instrument_id: 1, simple_name: 1, symbol: 1 }
      )
      .reduce({}) do |acc, x|
        acc[x[:instrument_id]] = x
        acc
      end

    res.map do |entry|
      instrument_id = entry[:_id]
      data_for_instrument = data_by_instrument_id[instrument_id]

      {
        start_popularity: entry[:start_popularity],
        end_popularity: entry[:end_popularity],
        popularity_difference: entry[:popularity_difference],
        symbol: data_for_instrument&.[](:symbol),
        name: data_for_instrument&.[](:simple_name),
      }
    end
  end
end
