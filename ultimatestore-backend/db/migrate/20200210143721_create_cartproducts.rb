class CreateCartproducts < ActiveRecord::Migration[6.0]
  def change
    create_table :cartproducts do |t|
      t.string :cart_id
      t.string :product_id

      t.timestamps
    end
  end
end
