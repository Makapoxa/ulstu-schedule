class AddDayRefsToSchedule < ActiveRecord::Migration[5.0]
  def change
    add_reference :schedules, :day, foreign_key: true
  end
end
