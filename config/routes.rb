Rails.application.routes.draw do
  
  resources :properties, only: [:show]
  resources :invoices, only: [:index]
  resources :clients, only: [:index, :show, :create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
