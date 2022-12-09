class BeanSerializer < ActiveModel::Serializer
  attributes :id, :origin, :name, :description, :image, :roast
  has_one :shop
end
