class BarometerController < ApplicationController
  include ApplicationHelper

  def barometer_timeseries
    res = with_cache("barometer_" + __method__.to_s, "") do
      Barometer::popularity_sum_timeseries
    end
    render json: res
  end

  def top_changes
    day_id = params[:day_id]
    limit = params[:limit] || 35
    res = with_cache("barometer_#{__method__.to_s}", "#{day_id}_#{limit}") do
      Barometer::top_changes_for_day(day_id, limit)
    end
    render json: res
  end
end
