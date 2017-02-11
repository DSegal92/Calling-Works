Rails.application.routes.draw do
  require 'sidekiq/web'
  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
    ActiveSupport::SecurityUtils.secure_compare(::Digest::SHA256.hexdigest(username), ::Digest::SHA256.hexdigest(SIDEKIQ_CONFIG['username'])) &
      ActiveSupport::SecurityUtils.secure_compare(::Digest::SHA256.hexdigest(password), ::Digest::SHA256.hexdigest(SIDEKIQ_CONFIG['password']))
  end if Rails.env.production?
  mount Sidekiq::Web, at: '/sidekiq'

  root 'call#new'

  resources :call_message, only: :create
  resources :call
  resources :representatives, only: :index
  resources :issues, only: :index
end
