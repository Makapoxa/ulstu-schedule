class SchedulesController < ApplicationController
  def show
    schedule = ImportSchedulesService.schedule(params[:group_url], params[:part])
    return unless schedule

    @schedule = schedule.to_hash
  end

  def choose
    session[:group_url] = params[:group_url] if params[:group_url]
    session[:part] = params[:part] if params[:part]
    redirect_to root_path
  end

  def reset
    session[:group_url] = nil
    session[:part] = nil
    redirect_to root_path
  end
end
