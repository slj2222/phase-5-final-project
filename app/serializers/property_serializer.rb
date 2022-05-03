class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip_code, :this_week
  has_one :client
end
