class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.integer :qtd_order
      t.float :price
      t.boolean :sold
      t.datetime :date_buy
      t.text :desc

      t.timestamps
    end
  end
end
