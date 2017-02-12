class WelcomeController < ApplicationController
  def index
    ImportSchedulesService.load_schedules if Schedule.count == 0
    redirect_to schedule_path(session[:group_id]) if session[:group_id]
    @schedules = ActiveModel::SerializableResource.new(Schedule.all).serializable_hash
  end
end
