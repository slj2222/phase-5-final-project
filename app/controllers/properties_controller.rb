class PropertiesController < ApplicationController

    def show
        property = Property.find_by(id: params[:id])
        render json: property
    end
end
