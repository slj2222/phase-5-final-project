class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.float :amount_charged
      t.integer :client_id
      t.boolean :this_week

      t.timestamps
    end
  end
end
