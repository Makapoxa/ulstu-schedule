Rails.application.routes.draw do
  root 'welcome#index'
  resources :schedules, only: [:show]
  get '/session', to: 'schedules#choose'
  get '/reset', to: 'schedules#reset'
end
