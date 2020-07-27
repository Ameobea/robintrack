Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get :most_popular, to: "stocks#most_popular", defaults: { format: :json }
  get :least_popular, to: "stocks#least_popular", defaults: { format: :json }
  get :quotes, to: "stocks#quotes", defaults: { format: :json }
  get :total_symbols, to: "stocks#total_symbols", defaults: { format: :json }
  get :popularity_bins, to: "stocks#popularity_bins", defaults: { format: :json }

  resources :stocks, only: [], id: /[A-Z0-9\.]+?/i, defaults: { format: :json } do
    member do
      get :quote
      get :popularity_history
      get :popularity_history_csv
      get :popularity_ranking
      get :quote_history
    end
  end

  get 'barometer/timeseries', to: "barometer#barometer_timeseries", defaults: { format: :json }
  get 'barometer/top_changes/:day_id', to: "barometer#top_changes", constraints: { day_id: /\d{4}-\d\d-\d\d/i }, defaults: { format: :json }

  get :largest_popularity_changes, to: "popularities#largest_popularity_changes", defaults: { format: :json }
  get :largest_popularity_decreases, to: "popularities#largest_popularity_decreases", defaults: { format: :json }
  get :largest_popularity_increases, to: "popularities#largest_popularity_increases", defaults: { format: :json }
end
