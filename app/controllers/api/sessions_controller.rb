class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid username or password'], status: 401
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    render json: { message: 'Logout could not be processed' } if !logged_in?
    logout
    render json: { message: 'Logout successful.' }
  end
end
