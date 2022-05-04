Rails.application.routes.draw do
  
  resources :companies, only: [:show, :create]
  resources :properties, only: [:index, :show, :create]
  resources :invoices, only: [:index, :create, :update, :destroy]
  resources :clients, only: [:index, :show, :create, :update, :destroy]
  
  get "/total-invoiced", to: "invoices#total_invoiced"
  post "/login", to: "sessions#create"
  get "/me", to: "companies#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "companies#create"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  



end
