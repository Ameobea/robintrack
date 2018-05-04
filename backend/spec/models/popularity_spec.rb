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
      { timestamp: 20.minutes.ago.utc, instrument_id: "goog_id", popularity: 893 },
      { timestamp: 20.minutes.ago.utc, instrument_id: "aapl_id", popularity: 893 },
      { timestamp: 20.minutes.ago.utc, instrument_id: "spy_id", popularity: 33 },
      { timestamp: 20.minutes.ago.utc, instrument_id: "amd_id", popularity: 90 },
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

end
