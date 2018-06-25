class StocksController < ApplicationController
  include ApplicationHelper

  DEFAULT_LIMIT = 50

  def most_popular
    key = "#{limit_param}_#{start_index_param}"
    render json: get_cache("most_popular", key) || most_popular_query(key)
  end

  def least_popular
    key = "#{limit_param}_#{start_index_param}"
    render json: get_cache("least_popular", key) || least_popular_query(key)
  end

  def quote
    render json: get_cache("quote", params[:id]) || quote_query(id)
  end

  def quotes
    symbols = params[:symbols].to_s.split(",")
    raise BadRequest, "no_symbols_supplied" if symbols.empty?

    entries = Quote.search_symbols(symbols)
    render json: format_quotes(entries)
  end

  def popularity_history
    id = params[:id]
    render json: get_cache("popularity_history", id) || popularity_history_query(id)
  end

  def popularity_ranking
    id = params[:id]
    render json: get_cache("popularity_ranking", id) || popularity_ranking_query(id)
  end

  def quote_history
    id = params[:id]
    render json: get_cache("quote_history", id) || quote_history_query(id)
  end

  def total_symbols
    entry = Popularity.total_symbols(hours_ago_param)

    total_symbols = entry ? entry["total_symbols"] : 0

    render json: { total_symbols: total_symbols }
  end

  def popularity_bins
    key = bin_count_param
    render json: get_cache("popularity_bins", key) || popularity_bins_query(key)
  end

  private

  def most_popular_query(key)
    entries = Popularity.most_popular(limit_param, start_index_param)
    put_cache("most_popular", key, format_popularity_entries(entries))
  end

  def least_popular_query(key)
    entries = Popularity.least_popular(limit_param, start_index_param)
    put_cache("least_popular", key, format_popularity_entries(entries))
  end

  def quote_query(key)
    entry = Quote.find_by_symbol id
    raise NotFound unless entry
    put_cache("quote", key, { bid: entry["bid_price"].to_f, ask: entry["ask_price"].to_f })
  end

  def popularity_history_query(key)
    entries = Popularity.get_history_for_symbol(params[:id])
    raise NotFound unless entries
    put_cache("popularity_history", key, format_popularity_history(entries))
  end

  def popularity_ranking_query(key)
    entry = Popularity.get_ranking(params[:id])
    raise NotFound unless entry
    put_cache("popularity_ranking", key, { symbol: entry["symbol"], ranking: entry["ranking"] })
  end

  def quote_history_query(key)
    entries = Quote.search_by_symbol(params[:id])
    raise NotFound if entries.none?
    put_cache("quote_history", key, format_quote_history(entries))
  end

  def popularity_bins_query(key)
    bucket_count = bin_count_param
    entries = Popularity.bucket_popularity(bucket_count)

    minmax_docs = entries.minmax do |a, b|
      a[:latest_popularity] <=> b[:latest_popularity]
    end
    min_popularity, max_popularity = minmax_docs.map { |doc| doc[:latest_popularity] }

    bucket_size = (max_popularity.to_f - min_popularity.to_f) / bucket_count.to_f
    binned_entries = entries.group_by do |elem|
      bucket_index = (elem[:latest_popularity].to_f / bucket_size).floor
      if bucket_index == bucket_count
        bucket_index -= 1
      end

      bucket_index
    end

    buckets = (0...bucket_count).map { |i| binned_entries.fetch(i, []).size }
    formatted = {
      min_popularity: min_popularity,
      max_popularity: max_popularity,
      buckets: buckets,
    }
    put_cache("popularity_bins", key, formatted)
  end

  def hours_ago_param
    if params[:hours_ago]
      hours_ago = params[:hours_ago].to_i
      if hours_ago <= 0
        raise BadRequest, "please provide a positive integer for hours_ago"
      end
      hours_ago
    end
  end

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

  def bin_count_param
    bin_count = params[:bin_count].to_i
    if bin_count < 0
      raise BadRequest, "Please provide a positive integer for `bin_count`."
    end
    bin_count
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
      { popularity: entry["popularity"], timestamp: entry["timestamp"].iso8601 }
    end
  end

  def format_quote_history(quotes)
    quotes.map do |quote|
      {
        bid: quote["bid_price"].to_f,
        ask: quote["ask_price"].to_f,
        last_trade_price: quote["last_trade_price"].to_f,
        timestamp: quote["updated_at"].iso8601,
      }
    end
  end
end
