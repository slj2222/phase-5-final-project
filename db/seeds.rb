# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


c1 = Client.create(first_name: "Spencer", last_name: "Johnson", phone_number: "555-555-5555", email_address: "yes@gmail.com", total_invoiced: 0, total_collected: 0)

p1 = Property.create(address: "1401 S King St", invoice_amount: 55, client_id: c1.id)

i1 = Invoice.create(invoice_date: "01/01/2022", amount_charged: 55, client_id: c1.id, property_id: p1.id, collected: false, days_since_invoiced: 0, invoiced: true)




puts "done seeding"