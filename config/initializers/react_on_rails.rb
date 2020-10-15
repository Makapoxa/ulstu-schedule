# frozen_string_literal: true

# See https://github.com/shakacode/react_on_rails/blob/master/docs/basics/configuration.md
# for many more options.

ReactOnRails.configure do |config|
  config.build_production_command = nil
  config.server_bundle_js_file = 'ulstu-schedule-bundle.js'
end
