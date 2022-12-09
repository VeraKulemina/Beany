class Bean < ApplicationRecord
  belongs_to :shop
  has_many :favorites
  has_many :users, through: :favorites
end
