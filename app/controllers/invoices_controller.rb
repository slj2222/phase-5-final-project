class InvoicesController < ApplicationController

    def index 
        render json: Invoice.all
    end

    def create
        # byebug
        newInvoice = Invoice.create(invoiceParams)
        render json: newInvoice
    end

    def update
        updateInvoice = Invoice.find_by(id: params[:id])
        updateInvoice.update(updateInvoiceParams)
    end
    
    def destroy
        deleteInvoice = Invoice.find_by(id: params[:id])
        deleteInvoice.destroy
    end

    private

    def invoiceParams
        params.permit(:invoice_date, :invoice_amount, :client_id, :property_id)
    end

    def updateInvoiceParams
        params.permit(:collected)
    end
end
