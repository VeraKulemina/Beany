class Bean < ApplicationRecord
  belongs_to :shop
  has_many :favorites
  has_many :users, through: :favorites
  validates :review, numericality: {only_integer: true}, :inclusion => 1..10
end
