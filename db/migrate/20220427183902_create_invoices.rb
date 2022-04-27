class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.string :invoice_date
      t.float :amount_charged
      t.integer :client_id, null: false, foreign_key: true
      t.integer :property_id, null: false, foreign_key: true
      t.boolean :collected
      t.integer :days_since_invoiced
      t.boolean :invoiced

      t.timestamps
    end
  end
end
