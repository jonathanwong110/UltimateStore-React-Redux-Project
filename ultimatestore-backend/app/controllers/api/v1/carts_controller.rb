class Api::V1::CartsController < ApplicationController
  before_action :set_cart, only: [:show, :update, :destroy]

  def show
    if Cart.all.length == 0
      @cart = Cart.create!
    end
    render json: @cart
  end

  def destroy
    @cart.destroy
  end

  private
    def set_cart
      @cart = Cart.find(params[:id])
    end

    def cart_params
      params.fetch(:cart, {})
    end
end
