class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :invoice_date, :invoice_amount, :collected, :days_since_invoiced, :invoiced
  has_one :client_id
  has_one :property_id
end
