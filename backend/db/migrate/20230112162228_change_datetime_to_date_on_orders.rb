class ChangeDatetimeToDateOnOrders < ActiveRecord::Migration[7.0]
  def change
    change_column :orders, :date_buy, :date
  end
end
