class WelcomeController < ApplicationController
  def index
    redirect_to group_url_path(session[:group_url]) if session[:group_url]
    @schedules = ImportSchedulesService.load_schedules
  end
end
