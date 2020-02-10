require 'test_helper'

class CartproductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cartproduct = cartproducts(:one)
  end

  test "should get index" do
    get cartproducts_url, as: :json
    assert_response :success
  end

  test "should create cartproduct" do
    assert_difference('Cartproduct.count') do
      post cartproducts_url, params: { cartproduct: { cart_id: @cartproduct.cart_id, product_id: @cartproduct.product_id } }, as: :json
    end

    assert_response 201
  end

  test "should show cartproduct" do
    get cartproduct_url(@cartproduct), as: :json
    assert_response :success
  end

  test "should update cartproduct" do
    patch cartproduct_url(@cartproduct), params: { cartproduct: { cart_id: @cartproduct.cart_id, product_id: @cartproduct.product_id } }, as: :json
    assert_response 200
  end

  test "should destroy cartproduct" do
    assert_difference('Cartproduct.count', -1) do
      delete cartproduct_url(@cartproduct), as: :json
    end

    assert_response 204
  end
end
