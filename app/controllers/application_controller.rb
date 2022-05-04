class ApplicationController < ActionController::API
  include ActionController::Cookies
    before_action :authorized
    def authorized
      @current_user = Company.find_by(id: session[:company_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

end
