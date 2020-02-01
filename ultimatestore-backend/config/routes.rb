Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      get 'products/search/:q' => 'products#search'

      resources :products
      resources :reviews
    end
  end
end