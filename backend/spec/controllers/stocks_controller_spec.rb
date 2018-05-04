require "rails_helper"

RSpec.describe StocksController, type: :controller do
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

  it "works by default with no params" do
    get :most_popular
    json_response = JSON.parse(response.body)

    symbols = json_response.map {|entry| entry["symbol"] }
    expect(symbols).to eq(%w[AAPL GOOG AMD SPY])
  end
end
