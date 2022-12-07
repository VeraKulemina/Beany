class CreateBeans < ActiveRecord::Migration[7.0]
  def change
    create_table :beans do |t|
      t.string :origin
      t.string :name
      t.string :description
      t.string :image
      t.string :roast
      t.references :shop, null: false, foreign_key: true


      t.timestamps
    end
  end
end
