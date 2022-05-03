class Invoice < ApplicationRecord
  belongs_to :client
  belongs_to :property


  def self.total_invoiced
    sum{|invoice| invoice.invoice_amount}
  end

  def self.total_collected
    
  end

end
