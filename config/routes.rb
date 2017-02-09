Rails.application.routes.draw do
  root 'call#new'

  resources :call_message, only: :create
  resources :call
  resources :representatives, only: :index
  resources :issues, only: :index
end
