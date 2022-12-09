class Shop < ApplicationRecord
    has_many :beans
    # validates :review, numericality: {only_integer: true}, :inclusion => 1..10
    validates :review, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
end
