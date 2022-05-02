class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address
  has_one :client
end
