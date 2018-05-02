Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get :most_popular, to: "stocks#most_popular", defaults: { format: :json }
  get :least_popular, to: "stocks#least_popular", defaults: { format: :json }
  resources :stocks, only: [], defaults: { format: :json } do
    member do
      get :quote
      get :popularity_history
      get :quote_history
    end
  end
end
