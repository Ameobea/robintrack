class StocksController < ApplicationController
  include ApplicationHelper

  DEFAULT_LIMIT = 50

  def most_popular
    render json: with_cache(
      "most_popular",
      Proc.new {|*args, **kwargs| Popularity.most_popular(*args, **kwargs)},
      Proc.new {|entries| format_popularity_entries entries}
    ).call(limit_param, start_index_param)
  end

  def least_popular
    render json: with_cache(
      "least_popular",
      Proc.new {|*args, **kwargs| Popularity.least_popular(*args, **kwargs)},
      Proc.new {|entries| format_popularity_entries entries}
    ).call(limit_param, start_index_param)
  end

  def quote
    render json: with_cache(
      "quote",
      Proc.new {|id| Quote.find_by_symbol id},
      Proc.new {|entry|
        raise NotFound unless entry
        { bid: entry["bid_price"].to_f, ask: entry["ask_price"].to_f }
      }
    ).call(params[:id])
  end

  def quotes
    symbols = params[:symbols].to_s.split(",")
    raise BadRequest, "no_symbols_supplied" if symbols.empty?

    entries = Quote.search_symbols(symbols)
    render json: format_quotes(entries)
  end

  def popularity_history
    render json: with_cache(
      "popularity_history",
      Proc.new {|id|
        entries = Popularity.get_history_for_symbol(id)
        raise NotFound unless entries
        entries
      },
      Proc.new {|entries| format_popularity_history(entries)}
    ).call(params[:id])
  end

  def popularity_ranking
    render json: with_cache(
      "popularity_ranking",
      Proc.new {|id|
        entry = Popularity.get_ranking(id)
        raise NotFound unless entry
        entry
      },
      Proc.new {|entry| { symbol: entry["symbol"], ranking: entry["ranking"] }}
    ).call(params[:id])
  end

  def quote_history
    render json: with_cache(
      "quote_history",
      Proc.new {|id|
        entries = Quote.search_by_symbol(id)
        raise NotFound if entries.none?
        entries
      },
      Proc.new {|entries| format_quote_history(entries)}
    ).call(params[:id])
  end

  def total_symbols
    entry = Popularity.total_symbols(hours_ago_param)

    total_symbols = entry ? entry["total_symbols"] : 0

    render json: { total_symbols: total_symbols }
  end

  def popularity_bins
    render json: with_cache(
      "popularity_bins",
      Proc.new {|bucket_count|
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
        { min_popularity: min_popularity, max_popularity: max_popularity, buckets: buckets }
      },
      Proc.new {|entry| entry}
    ).call(bin_count_param)
  end

  private

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
