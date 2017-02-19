require 'test_helper'

class WelcomeControllerTest < ActiveSupport::TestCase
  test 'should get index' do
    get :index
    assert_response :success
  end
end
