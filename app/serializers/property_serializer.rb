class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip_code, :this_week, :amount_charged
  has_one :client
end
