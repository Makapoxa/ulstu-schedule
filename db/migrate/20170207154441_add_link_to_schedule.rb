class AddLinkToSchedule < ActiveRecord::Migration[5.0]
  def change
    add_column :schedules, :link, :string
  end
end
