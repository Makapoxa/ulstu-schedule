source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'active_model_serializers', github: 'rails-api/active_model_serializers'
gem 'bootstrap-sass', '~> 3.3.6'
gem 'bootswatch-rails'
gem 'execjs'
gem 'foreman'
gem 'haml-rails'
gem 'jquery-rails'
gem 'listen'
gem 'mechanize'
gem 'nokogiri'
gem 'pg'
gem 'rails', '~> 5.0.1'
gem 'react_on_rails', '~> 6'
gem 'sass-rails', '~> 5.0'
gem 'select2-rails'
gem 'turbolinks', '~> 5'


group :development, :test do
  gem 'pry'
end

gem 'mini_racer', platforms: :ruby
