source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'active_model_serializers', github: 'rails-api/active_model_serializers'
gem 'bootstrap-sass', '~> 3.4.1'
gem 'bootswatch-rails'
gem 'execjs'
gem 'foreman'
gem 'haml-rails'
gem 'jquery-rails'
gem 'listen'
gem 'mechanize'
gem 'nokogiri'
gem 'rails', '~> 5.2.3'
gem 'react_on_rails'
gem 'readline'
gem 'rubocop'
gem 'rubocop-rails'
gem 'webpacker', '~> 5.x'

group :development, :test do
  gem 'pry'
end

gem 'mini_racer', platforms: :ruby
