class RemoveImgFromShops < ActiveRecord::Migration[7.0]
  def change
    remove_column :shops, :img
  end
end
