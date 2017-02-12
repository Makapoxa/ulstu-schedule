class AddDayNameToDay < ActiveRecord::Migration[5.0]
  def change
    add_column :days, :name, :string
    add_column :days, :week, :integer
  end
end
