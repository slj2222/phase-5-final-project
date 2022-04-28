class Property < ApplicationRecord
  has_many :invoices
  belongs_to :client
end
