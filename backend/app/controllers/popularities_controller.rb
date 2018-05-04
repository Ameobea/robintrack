class PopularitiesController < ApplicationController
  DEFAULT_LIMIT = 50

  def largest_popularity_changes
    entries = Popularity.largest_popularity_changes(options_from_params)
    render json: format_popularity_entries(entries)
  end

  def largest_popularity_decreases
    entries = Popularity.largest_popularity_decreases(options_from_params)
    render json: format_popularity_entries(entries)
  end

  def largest_popularity_increases
    entries = Popularity.largest_popularity_increases(options_from_params)
    render json: format_popularity_entries(entries)
  end

  private

  def options_from_params
    {
      hours_ago: hours_ago_param,
      limit: limit_param,
      percentage: percentage_param,
      min_popularity: min_popularity_param,
    }
  end

  def hours_ago_param
    hours_ago = params[:hours_ago].to_i
    if hours_ago <= 0
      raise BadRequest, "please provide a positive integer for hours_ago"
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
    if min_popularity < 0
      raise BadRequest, "please provide a positive integer for min_popularity"
    end
    min_popularity
  end

  def format_popularity_entries(entries)
    entries.map do |entry|
      {
        start_popularity: entry["start_popularity"],
        end_popularity: entry["end_popularity"],
        popularity_difference: entry["popularity_difference"],
        symbol: entry["symbol"],
      }
    end
  end
end
