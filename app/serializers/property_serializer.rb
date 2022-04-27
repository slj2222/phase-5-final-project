class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :invoice_amount
  has_one :client
end
