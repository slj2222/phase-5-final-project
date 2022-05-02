class ClientsController < ApplicationController

    def index 
        render json: Client.all
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
        editClient = Client.find_by(id: params[:id])
        editClient.update(clientParams)
    end

    def destroy
        removeClient = Client.find_by(id: params[:id]) 
        removeClient.destroy
    end

    private

    def clientParams
        params.permit(:first_name, :last_name, :phone_number, :email_address)
    end
end
