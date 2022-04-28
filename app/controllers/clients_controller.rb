class ClientsController < ApplicationController

    def index 
        render json: Client.all
    end

    def show
        client = Client.find_by(id: params[:id])
        if client
            render json: client
        end
    end
end
