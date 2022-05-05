class Company < ApplicationRecord
    has_many :clients
    has_secure_password
    validates :company_name, uniqueness: true

end
