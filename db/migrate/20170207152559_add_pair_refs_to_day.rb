class AddPairRefsToDay < ActiveRecord::Migration[5.0]
  def change
    add_reference :days, :pair, foreign_key: true
  end
end
