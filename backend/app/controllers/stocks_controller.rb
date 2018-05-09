class StocksController < ApplicationController
  DEFAULT_LIMIT = 50

  def most_popular
    entries = Popularity.most_popular(limit_param, start_index_param)
    render json: format_popularity_entries(entries)
  end

  def least_popular
    entries = Popularity.least_popular(limit_param, start_index_param)
    render json: format_popularity_entries(entries)
  end

  def quote
    entry = Quote.find_by_symbol(params[:id])
    raise NotFound unless entry

    render json: { bid: entry["bid_price"].to_f, ask: entry["ask_price"].to_f }
  end

  def quotes
    symbols = params[:symbols].to_s.split(",")
    raise BadRequest, "no_symbols_supplied" if symbols.empty?

    entries = Quote.search_symbols(symbols)
    render json: format_quotes(entries)
  end

  def popularity_history
    entries = Popularity.get_history_for_symbol(params[:id])
    raise NotFound unless entries

    render json: format_popularity_history(entries)
  end

  def popularity_ranking
    entry = Popularity.get_ranking(params[:id])
    raise NotFound unless entry

    render json: { symbol: entry["symbol"], ranking: entry["ranking"] }
  end

  def quote_history
    entries = Quote.search_by_symbol(params[:id])
    raise NotFound if entries.none?

    render json: format_quote_history(entries)
  end

  private

  def start_index_param
    start_index = params[:start_index].to_i
    if start_index < 0
      raise BadRequest, "please provide a positive integer for start_index"
    end
    start_index
  end

  def limit_param
    params.fetch(:limit, DEFAULT_LIMIT).to_i
  end

  def format_popularity_entries(entries)
    entries.map do |entry|
      { popularity: entry["latest_popularity"], symbol: entry["symbol"] }
    end
  end

  def format_quotes(quotes)
    quotes.each_with_object({}) do |quote, acc|
      acc[quote["_id"]] = { bid: quote["latest_bid"].to_f, ask: quote["latest_ask"].to_f }
    end
  end

  def format_popularity_history(entries)
    entries.map do |entry|
      { popularity: entry["popularity"], timestamp: entry["timestamp"] }
    end
  end

  def format_quote_history(quotes)
    quotes.map do |quote|
      {
        bid: quote["bid_price"].to_f,
        ask: quote["ask_price"].to_f,
        last_trade_price: quote["last_trade_price"].to_f,
        timestamp: quote["updated_at"],
      }
    end
  end
end
