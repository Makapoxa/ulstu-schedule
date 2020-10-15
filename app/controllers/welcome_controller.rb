class WelcomeController < ApplicationController
  def index
    redirect_to group_url_path(session[:part], session[:group_url]) if session[:group_url]
    schedules = ImportSchedulesService.load_schedules
    @schedules_props = { schedules: schedules, prerender: true }
    respond_to do |format|
      format.html
      format.json { render json: schedules }
    end
  end
end
