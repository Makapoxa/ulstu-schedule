class AddScheduleIdFieldToDay < ActiveRecord::Migration[5.0]
  def change
    add_column :days, :schedule_id, :integer
  end
end
