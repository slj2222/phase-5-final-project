class CompaniesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        company = Company.create!(company_params)
        session[:company_id] = company.id
        render json: company
    end


    def show
        company = Company.find_by(id: session[:company_id])
        if company
          render json: company
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    # def show
    #     render json: @current_company
    # end

    private

    def company_params
        params.permit(:company_name, :password)
    end

end
