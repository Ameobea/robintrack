class Barometer
  def self.popularity_sum_timeseries
    MongoClient[:total_change_per_day_sums]
      .find({ "abs_pop_diff_sum": { "$ne": 0 } }, projection: { "_id": 0, "day_id": 1, "abs_pop_diff_sum": 1 })
      .sort({ "day_id": 1 }).to_a
  end

  def self.top_changes_for_day(day_id, limit)
    res = MongoClient[:total_change_per_day].aggregate([
      { "$match": { "day_id": day_id } },
      { "$addFields": { "abs_pop_diff": { "$abs": { "$subtract": ["$end_popularity", "$start_popularity"] } } } },
      { "$sort": { "abs_pop_diff": -1 } },
      { "$project": { "_id": 0, "abs_pop_diff": 0 } },
      { "$limit": limit }
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

    res.map do |entry|
      instrument_id = entry[:instrument_id]
      instrument_data = data_by_instrument_id[instrument_id]
      entry[:symbol] = instrument_data&.[](:symbol)
      entry[:name] = instrument_data&.[](:simple_name)
      entry.delete(:instrument_id)
      entry.delete(:day_id)
      entry
    end
  end
end
