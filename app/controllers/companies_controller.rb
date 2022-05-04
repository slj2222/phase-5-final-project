class CompaniesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        company = Company.create!(company_params)
        session[:company_id] = company.id
        render json: company
    end

    def show
        render json: @current_company_name
    end

    private

    def company_params
        params.permit(:company_name, :password)
    end

end
