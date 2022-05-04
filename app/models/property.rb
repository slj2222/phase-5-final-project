class Property < ApplicationRecord
  belongs_to :client
  belongs_to :company
  has_many :invoices

  
  
end
