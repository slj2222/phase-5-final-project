class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :company_phone_number
      t.string :company_email_address
      t.string :password_digest

      t.timestamps
    end
  end
end
