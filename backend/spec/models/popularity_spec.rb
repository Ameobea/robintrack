require "rails_helper"

RSpec.describe Popularity do
  before(:each) do
    MongoClient[:index].insert_many([
      { instrument_id: "goog_id", symbol: "GOOG" },
      { instrument_id: "aapl_id", symbol: "AAPL" },
      { instrument_id: "spy_id", symbol: "SPY" },
      { instrument_id: "amd_id", symbol: "AMD" },
    ])

    MongoClient[:popularity].insert_many([
      # same popularity to test sorting by symbol
      { timestamp: 20.minutes.ago, instrument_id: "goog_id", popularity: 893 },
      { timestamp: 20.minutes.ago, instrument_id: "aapl_id", popularity: 893 },
      { timestamp: 20.minutes.ago, instrument_id: "spy_id", popularity: 8 },
      { timestamp: 20.minutes.ago, instrument_id: "amd_id", popularity: 25 },

      { timestamp: 90.minutes.ago, instrument_id: "goog_id", popularity: 20 },
      { timestamp: 90.minutes.ago, instrument_id: "aapl_id", popularity: 20 },
      { timestamp: 90.minutes.ago, instrument_id: "spy_id", popularity: 20 },
      { timestamp: 90.minutes.ago, instrument_id: "amd_id", popularity: 20 },
    ])
  end

  after(:each) do
    MongoClient[:index].delete_many
    MongoClient[:popularity].delete_many
  end

  it "returns the most popular stocks" do
    top_4_stocks = Popularity.most_popular(4, 0).to_a.map { |entry| entry["symbol"] }
    top_2_stocks = Popularity.most_popular(2, 0).to_a.map { |entry| entry["symbol"] }
    top_2_stocks_offset_1 = Popularity.most_popular(2, 1).to_a.map { |entry| entry["symbol"] }

    expect(top_4_stocks).to eq(%w[AAPL GOOG AMD SPY])
    expect(top_2_stocks).to eq(%w[AAPL GOOG])
    expect(top_2_stocks_offset_1).to eq(%w[GOOG AMD])
  end

  it "returns the least popular stocks" do
    top_4_stocks = Popularity.least_popular(4, 0).to_a.map { |entry| entry["symbol"] }
    top_2_stocks = Popularity.least_popular(2, 0).to_a.map { |entry| entry["symbol"] }
    top_2_stocks_offset_1 = Popularity.least_popular(2, 1).to_a.map { |entry| entry["symbol"] }

    expect(top_4_stocks).to eq(%w[SPY AMD AAPL GOOG])
    expect(top_2_stocks).to eq(%w[SPY AMD])
    expect(top_2_stocks_offset_1).to eq(%w[AMD AAPL])
  end

  it "returns the number of symbols" do
    entry = Popularity.total_symbols
    expect(entry["total_symbols"]).to eq(4)
  end

  it "returns the ranking of a symbol" do
    entry = Popularity.get_ranking("AMD")
    expect(entry["ranking"]).to eq(3)
  end

  it "returns error for get_ranking of symbol that doesnt exist" do
    entry = Popularity.get_ranking("QQWEQWE")
    expect(entry).to eq(nil)
  end

  it "returns the history of a symbol" do
    entries = Popularity.get_history_for_symbol("AMD").map do |entry|
      entry["popularity"]
    end
    expect(entries).to eq([25, 20])
  end

  it "returns error for get_history_for_symbol of symbol that doesnt exist" do
    entries = Popularity.get_history_for_symbol("QQWEQWE")
    expect(entries).to eq(nil)
  end

  it "gets the largest_popularity_changes" do
    entries = Popularity.largest_popularity_changes(hours_ago: 2, limit: 50, start_index: 0).map do |entry|
      entry["symbol"]
    end
    expect(entries).to eq(["AAPL", "GOOG", "SPY", "AMD"])
  end

  it "gets the largest_popularity_decreases" do
    entries = Popularity.largest_popularity_decreases(hours_ago: 2, limit: 50, start_index: 0).map do |entry|
      entry["symbol"]
    end
    expect(entries).to eq(["SPY", "AMD", "AAPL", "GOOG"])
  end

    it "gets the largest_popularity_increases" do
    entries = Popularity.largest_popularity_increases(hours_ago: 2, limit: 50, start_index: 0).map do |entry|
      entry["symbol"]
    end
    expect(entries).to eq(["AAPL", "GOOG", "AMD", "SPY"])
  end

end
