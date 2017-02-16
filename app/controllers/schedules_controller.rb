class SchedulesController < ApplicationController
  def show
    schedule = ImportSchedulesService.schedule(params[:group_url])
    return unless schedule
    @schedule = schedule.to_hash
  end

  def choose
    session[:group_url] = params[:group_url] if params[:group_url]
    redirect_to root_path
  end

  def reset
    session[:group_url] = nil
    redirect_to root_path
  end
end
