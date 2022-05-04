class PropertiesController < ApplicationController

    def index
        render json: Property.all
    end

    def show
        property = Property.find(params[:id])
        render json: property
    end

    def create
        newProperty = Property.create(propertyParams)
        render json: newProperty
    end

    private

    def propertyParams
        params.permit(:address, :city, :state, :zip_code, :client_id, :amount_charged, :company_id)
    end
end
