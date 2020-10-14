Rails.application.routes.draw do
  root 'welcome#index'
  get '/schedules/:part/:group_url', to: 'schedules#show', as: :group_url
  get '/session/', to: 'schedules#choose'
  get '/reset', to: 'schedules#reset'
end
