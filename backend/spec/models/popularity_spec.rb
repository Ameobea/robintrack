require 'rails_helper'

RSpec.describe Popularity do
  it "returns the most popular stocks" do
    top_10_stocks = Popularity.most_popular(10, 0).to_a
    expect(top_10_stocks).to eq(9)
  end
end
