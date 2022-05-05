class Client < ApplicationRecord
    # has_many :invoices
    # has_many :properties
    # has_many :companies, through: :properties

    belongs_to :company
    has_many :invoices
    has_many :properties
end
