require_relative 'boot'

require "active_model/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module UlstuSchedule
  class Application < Rails::Application
    config.paths.add 'lib', eager_load: true
    config.assets.paths << Rails.root.join('app', 'assets', 'flash')
    config.serve_static_files = true
  end
end
