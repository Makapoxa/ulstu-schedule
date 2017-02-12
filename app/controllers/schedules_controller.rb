class SchedulesController < ApplicationController
  def show
    schedule = Schedule.find_by(id: params[:id])
    ImportSchedulesService.load_days(params[:id]) unless schedule
    schedule.reload
    @schedule = ActiveModelSerializers::SerializableResource.new(schedule).serializable_hash({})
    @schedule[:days] = ActiveModelSerializers::SerializableResource.new(schedule.days).serializable_hash({})
  end

  def choose
    session[:group_id] = params[:group_id] if params[:group_id]
    redirect_to root_path
  end

  def reset
    session[:group_id] = nil
    redirect_to root_path
  end
end
