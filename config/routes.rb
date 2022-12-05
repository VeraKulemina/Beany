Rails.application.routes.draw do
  resources :favorites, only: [:index, :create]
  resources :beans, only: [:index, :show, :create]
  resources :shops, only: [:index, :create, :destroy]
  resources :users, only: [:index, :create, :update, :destroy]
  
end
