class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :image, :category
  has_many :reviews
end
