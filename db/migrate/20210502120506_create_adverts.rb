class CreateAdverts < ActiveRecord::Migration[6.1]
  def change
    create_table :adverts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.text :description

      t.decimal :price, scale: 2, precision: 16, null: false
      t.timestamps
    end

    add_column :users, :phone_number, :string
  end
end
