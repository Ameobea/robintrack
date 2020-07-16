class Quote
  def self.find_by_symbol(symbol)
    instrument = MongoClient[:index].find({ symbol: symbol }).first
    if !instrument
      return nil
    end
    instrument_id = instrument[:instrument_id]

    MongoClient[:quotes]
      .find({ instrument_id: instrument_id })
      .sort({ updated_at: -1 })
      .limit(1)
      .first
  end

  def self.search_by_symbol(symbol)
    instrument = MongoClient[:index].find({ symbol: symbol }).first
    if !instrument
      return nil
    end
    instrument_id = instrument[:instrument_id]

    MongoClient[:quotes].find({ instrument_id: instrument_id }).sort({ updated_at: 1 })
  end
end
