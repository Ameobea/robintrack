class StocksController < ApplicationController
  include ApplicationHelper

  DEFAULT_LIMIT = 50

  def most_popular
    # Try to use the cache, falling back to mongo query if it's not available
    end_index = start_index_param + limit_param
    cached_res = $redis.lrange "popularity_list", start_index_param, end_index

    res = nil
    if cached_res
      res = cached_res.map { |datum| JSON.parse datum }
    else
      key = "#{limit_param}_#{start_index_param}"
      res = with_cache(__method__.to_s, key) do
        entries = Popularity.most_popular limit_param, start_index_param
        format_popularity_entries entries
      end
    end

    respond_to do |format|
      format.json { render json: res }
      format.csv { send_data format_popularity_entries_csv(res), filename: Time.now.utc.strftime("leaderboard_%Y-%m-%d_%H-00-00.csv") }
    end
  end

  def least_popular
    # Try to use the cache, falling back to mongo query if it's not available
    start_index = -start_index_param
    end_index = -start_index_param - limit_param
    cached_res = $redis.lrange "popularity_list", start_index, end_index

    res = nil
    if cached_res
      res = cached_res.map { |datum| JSON.parse datum }.reverse
    else
      key = "#{limit_param}_#{start_index_param}"
      res = with_cache(__method__.to_s, key) do
        entries = Popularity.least_popular limit_param, start_index_param
        format_popularity_entries entries
      end
    end
    render json: res
  end

  def quote
    res = with_cache(__method__.to_s, params[:id]) do
      entry = Quote.find_by_symbol params[:id]
      metadata = Index.get_symbol_metadata(params[:id])

      raise NotFound unless entry && metadata

      {
        bid: entry["bid_price"].to_f,
        ask: entry["ask_price"].to_f,
        simple_name: metadata["simple_name"],
        name: metadata["name"],
      }
    end

    render json: res
  end

  def popularity_history
    id = params[:id]

    begin
      parsed_start_time = params[:start_time]&.to_datetime
      parsed_end_time = params[:end_time]&.to_datetime
    rescue ArgumentError => ex
      raise BadRequest, "invalid_date"
    end

    key = "#{id}_#{parsed_start_time.to_s}_#{parsed_end_time.to_s}"

    res = with_cache(__method__.to_s, key) do
      entries = Popularity.get_history_for_symbol id, parsed_start_time, parsed_end_time
      raise NotFound unless entries
      # if params[:daily_datapoints]
      entries = limit_datapoints_per_day(entries)
      # end
      format_popularity_history entries
    end

    render json: res
  end

  def popularity_history_csv
    id = params[:id]

    begin
      parsed_start_time = params[:start_time]&.to_datetime
      parsed_end_time = params[:end_time]&.to_datetime
    rescue ArgumentError => ex
      raise BadRequest, "invalid_date"
    end

    key = "#{id}_#{parsed_start_time.to_s}_#{parsed_end_time.to_s}"

    res = with_cache(__method__.to_s, key, json: false) do
      entries = Popularity.get_history_for_symbol id, parsed_start_time, parsed_end_time
      raise NotFound unless entries
      format_popularity_history_csv entries
    end

    send_data res, :type => "text/csv", :filename => "#{id}_popularity.csv"
  end

  def popularity_ranking
    id = params[:id]
    # First attempt to use the pre-built popularity rankings cache
    cached_popularity_ranking = get_cache("popularity_rankings", id)
    res = nil

    if cached_popularity_ranking
      res = {"symbol": id, "ranking": cached_popularity_ranking.to_i, "cached": true}
    else
      # If the popularity rankings cache is not available, fall back to database query
      res = with_cache(__method__.to_s, id) do
        entry = Popularity.get_ranking id
        raise NotFound unless entry
        {symbol: entry["symbol"], ranking: entry["ranking"]}
      end
    end

    render json: res
  end

  def quote_history
    id = params[:id]
    res = with_cache(__method__.to_s, "#{id}-#{!!params[:daily_datapoints]}") do
      entries = Quote.search_by_symbol id
      raise NotFound unless entries
      entries = limit_datapoints_per_day(entries) if params[:daily_datapoints]
      format_quote_history entries
    end

    render json: res
  end

  def total_symbols
    hours_ago = hours_ago_param
    res = with_cache(__method__.to_s, "#{hours_ago}") do
      entry = Popularity.total_symbols(hours_ago)
      total_symbols = entry ? entry["total_symbols"] : 0

      {total_symbols: total_symbols}
    end

    render json: res
  end

  private

  def limit_datapoints_per_day(datapoints)
    uniq_days = {}
    date_cutoff = 1.year.ago
    datapoints.select do |datapoint|
      date = datapoint["timestamp"] || datapoint["updated_at"]
      next true if date > date_cutoff # datapoints in the last year don't need to be truncated
      day = date.strftime('%Y-%m-%d')
      is_uniq = !uniq_days[day]
      uniq_days[day] = true
      is_uniq
    end
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
      { popularity: entry["latest_popularity"], symbol: entry["symbol"], name: entry["name"] }
    end
  end

  def format_popularity_entries_csv(entries)
    CSV.generate do |csv|
      csv << %w[symbol name popularity]
      entries.each do |entry|
        csv << entry.values_at("symbol", "name","popularity")
      end
    end
  end

  def format_quotes(quotes)
    quotes.each_with_object({}) do |quote, acc|
      acc[quote["_id"]] = {bid: quote["latest_bid"].to_f, ask: quote["latest_ask"].to_f}
    end
  end

  def format_popularity_history(entries)
    entries.map do |entry|
      {popularity: entry["popularity"], timestamp: entry["timestamp"].iso8601}
    end
  end

  def format_popularity_history_csv(entries)
    CSV.generate do |csv|
      entries.each { |entry| csv << [entry["timestamp"], entry["popularity"]] }
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
