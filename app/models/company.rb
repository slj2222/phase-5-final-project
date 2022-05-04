class Company < ApplicationRecord
    has_many :properties
    has_many :clients, through: :properties
    has_secure_password
    validates :company_name, uniqueness: true

end
