class InvoicesController < ApplicationController

    def index 
        render json: Invoice.all
    end

    def create
        newInvoice = Invoice.create(invoiceParams)
        render json: newInvoice
    end

    private

    def invoiceParams
        params.permit(:invoice_date, :invoice_amount, :client_id, :property_id)
    end
end
