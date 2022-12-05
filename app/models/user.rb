class User < ApplicationRecord
    has_many :favorites
    has_many :beans, through: :favorites
end
