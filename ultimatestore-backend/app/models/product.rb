class Product < ApplicationRecord
    has_many :cart_products
    has_many :reviews
    validates_presence_of :title, :price, :description, :image, :category
end
