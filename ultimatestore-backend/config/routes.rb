Rails.application.routes.draw do
  resources :cartproducts
  resources :carts
  namespace :api do
    namespace :v1 do
      
      resources :products
      resources :reviews
    end
  end
end