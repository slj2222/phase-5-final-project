# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


c1 = Client.create(first_name: "Spencer", last_name: "Johnson", phone_number: "555-555-5555", email_address: "yes@gmail.com", total_invoiced: 0, total_collected: 0)
c2 = Client.create(first_name: "Josh", last_name: "Robo", phone_number: "555-555-5555", email_address: "woah@gmail.com", total_invoiced: 0, total_collected: 0)
c3 = Client.create(first_name: "Gary", last_name: "Craig", phone_number: "555-555-5555", email_address: "omg@gmail.com", total_invoiced: 0, total_collected: 0)
c4 = Client.create(first_name: "Jimmy", last_name: "Smith", phone_number: "555-555-5555", email_address: "no@gmail.com", total_invoiced: 0, total_collected: 0)

p1 = Property.create(address: "1401 S King St", amount_charged: 10, client_id: c1.id, this_week: true)
p2 = Property.create(address: "2221 E Walnut St", amount_charged: 20, client_id: c2.id, this_week: true)
p3 = Property.create(address: "1401 W Florida St", amount_charged: 30, client_id: c3.id, this_week: false)
p4 = Property.create(address: "1401 N Crash St", amount_charged: 40, client_id: c4.id, this_week: false)

i1 = Invoice.create(invoice_date: "01/01/2022", invoice_amount: 10.00, client_id: c1.id, property_id: p1.id, collected: false, days_since_invoiced: 1, invoiced: true)
i2 = Invoice.create(invoice_date: "02/02/2022", invoice_amount: 20.00, client_id: c2.id, property_id: p2.id, collected: true, days_since_invoiced: 2, invoiced: true)
i3 = Invoice.create(invoice_date: "03/03/2022", invoice_amount: 30.00, client_id: c3.id, property_id: p3.id, collected: false, days_since_invoiced: 3, invoiced: true)
i4 = Invoice.create(invoice_date: "04/04/2022", invoice_amount: 40.00, client_id: c4.id, property_id: p4.id, collected: true, days_since_invoiced: 4, invoiced: true)




puts "done seeding"