class ClientsController < ApplicationController

    def index 
        # byebug
        companyClients = Client.where(company_id: session[:company_id])
        render json: companyClients, include: :invoices
    end

    def show
        client = Client.find_by(id: params[:id])
        if client
            render json: client, serializer: ClientWithInvoices
        end
    end

    def create
        newClient = Client.create(clientParams)
        render json: newClient
    end

    def update
        editClient = Client.find(params[:id])
        render json: editClient.update(clientParams)
    end

    def destroy
        removeClient = Client.find_by(id: params[:id]) 
        removeClient.destroy
    end

    private

    def clientParams
        params.permit(:first_name, :last_name, :phone_number, :email_address, :company_id)
    end
end
