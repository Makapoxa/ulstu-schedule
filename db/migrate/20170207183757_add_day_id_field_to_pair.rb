class AddDayIdFieldToPair < ActiveRecord::Migration[5.0]
  def change
    add_column :pairs, :day_id, :integer
  end
end
