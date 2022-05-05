class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :company_phone_number, :company_email_address, :password
  has_many :clients
  # has_many :clients

end
