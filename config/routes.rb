Rails.application.routes.draw do
  resources :favorites, only: [:index, :create]
  resources :beans, only: [:index, :show, :create]
  resources :shops, only: [:index, :create, :destroy]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index]
  
end
