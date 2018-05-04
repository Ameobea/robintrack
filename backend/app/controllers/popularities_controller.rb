class PopularitiesController < ApplicationController
  DEFAULT_LIMIT = 50

  def largest_popularity_changes
    entries = Popularity.largest_popularity_changes(hours_ago_param, limit_param)
    render json: format_popularity_entries(entries)
  end

  def largest_popularity_decreases
    entries = Popularity.largest_popularity_decreases(hours_ago_param, limit_param)
    render json: format_popularity_entries(entries)
  end

  def largest_popularity_increases
    entries = Popularity.largest_popularity_increases(hours_ago_param, limit_param)
    render json: format_popularity_entries(entries)
  end

  private

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

  def format_popularity_entries(entries)
    entries.map do |entry|
      { popularity_difference: entry["popularity_difference"], symbol: entry["indexes"].first["symbol"] }
    end
  end
end
