class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :img
end
