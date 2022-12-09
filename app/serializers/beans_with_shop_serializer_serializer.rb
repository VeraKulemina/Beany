class BeansWithShopSerializerSerializer < ActiveModel::Serializer
  attributes :name, :origin, :description, :image, :roast, :id
  has_one :shop

end
