class Client < ApplicationRecord
    has_many :invoices
    has_many :properties, through: :invoices
end
