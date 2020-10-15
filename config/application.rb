require 'action_controller/railtie'
require 'action_view/railtie'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module UlstuSchedule
  class Application < Rails::Application
    config.serve_static_files = true
  end
end
