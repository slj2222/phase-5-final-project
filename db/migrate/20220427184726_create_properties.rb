class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.float :invoice_amount
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
