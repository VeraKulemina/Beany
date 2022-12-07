class AddReviewToShops < ActiveRecord::Migration[7.0]
  def change
    add_column :shops, 
    :review, :integer
  end
end
