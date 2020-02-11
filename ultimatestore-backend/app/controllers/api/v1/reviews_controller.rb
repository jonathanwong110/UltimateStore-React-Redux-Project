class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    @reviews = Review.all

    render json: @reviews, status: 200
  end

  def show
    render json: @review, status: 200
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: @review, status: 200
  end

  private
    def set_review
      @review = Review.find(params[:id])
    end

    def review_params
      params.require(:review).permit(:content, :product_id)
    end
end
