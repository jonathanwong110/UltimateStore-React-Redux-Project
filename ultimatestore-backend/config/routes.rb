Rails.application.routes.draw do
  resources :cartproducts
  resources :carts
  namespace :api do
    namespace :v1 do

      get '/cart' => 'carts#show', as: 'carts'

      resources :products
      resources :reviews
      resources :cart, only: [:show, :destroy]
      resources :cartproducts, only: [:show]
    end
  end
end