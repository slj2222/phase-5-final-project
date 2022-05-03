Rails.application.routes.draw do
  
  resources :properties, only: [:index, :show, :create]
  resources :invoices, only: [:index, :create, :update, :destroy]
  resources :clients, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }



  

end
