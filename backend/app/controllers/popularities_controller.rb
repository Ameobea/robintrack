class PopularitiesController < ApplicationController
  include ApplicationHelper

  DEFAULT_LIMIT = 50

  def largest_popularity_changes
    options = options_from_params
    res = with_cache("largest_popularity_changes", hash_hash(options)) do
      Popularity.largest_popularity_changes(options)
    end
    render json: res
  end

  def largest_popularity_decreases
    options = options_from_params
    res = with_cache("largest_popularity_decreases", hash_hash(options)) do
      Popularity.largest_popularity_decreases(options)
    end
    render json: res
  end

  def largest_popularity_increases
    options = options_from_params
    res = with_cache("largest_popularity_increases", hash_hash(options)) do
      Popularity.largest_popularity_increases(options)
    end
    render json: res
  end

  private

  def options_from_params
    {
      hours_ago: hours_ago_param,
      limit: limit_param,
      percentage: percentage_param,
      min_popularity: min_popularity_param,
      start_index: start_index_param,
    }
  end

  def start_index_param
    start_index = params[:start_index].to_i
    if start_index < 0
      raise BadRequest, "please provide a positive integer for start_index"
    end
    start_index
  end

  def hours_ago_param
    hours_ago = params[:hours_ago].to_i
    if hours_ago <= 0
      raise BadRequest, "please provide a positive integer for hours_ago"
    end

    # Special case for 1 hour lookback.  We need at least 2 updates to compare and there
    # will never be more than one update per hour.
    if hours_ago == 1
      hours_ago = 2
    end
    hours_ago
  end

  def limit_param
    params.fetch(:limit, DEFAULT_LIMIT).to_i
  end

  def percentage_param
    params["percentage"] == "true"
  end

  def min_popularity_param
    return unless percentage_param

    min_popularity = params[:min_popularity].to_i
    p min_popularity
    if ![1, 10, 50, 100, 500, 1000, 10000].include?(min_popularity)
      raise BadRequest, "min_popularity must be one of 1, 10, 50, 100, 500, 1000, 10000"
    end
    min_popularity
  end
end
