class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    @reviews = Review.all

    render json: @reviews, status: 200
  end

  def show
    render json: @review, status: 200
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: 200, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(review_params)
      render json: @review, status: 200
    else
      render json: @review.errors, status: :unprocessable_entity
    end
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
