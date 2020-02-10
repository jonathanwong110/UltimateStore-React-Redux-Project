class CartproductsController < ApplicationController
  before_action :set_cartproduct, only: [:show, :update, :destroy]

  def destroy
    @product = Product.find(params[:id])
    @cart = Cart.find_by(params[:id])
    @cartproduct = CartProduct.find_by(product_id: @product.id, cart_id: @cart.id)
    @cartproduct.destroy
    render json: @product, status: 200
  end

end
