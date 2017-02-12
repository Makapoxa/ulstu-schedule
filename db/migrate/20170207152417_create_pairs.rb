class CreatePairs < ActiveRecord::Migration[5.0]
  def change
    create_table :pairs do |t|
      t.string :info

      t.timestamps
    end
  end
end
