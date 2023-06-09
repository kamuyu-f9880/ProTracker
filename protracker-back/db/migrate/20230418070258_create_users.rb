class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table  :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :password_reset_token
      t.boolean :admin,  default: false
      t.text :bio
      t.string :github_link
      t.string :avatar_url
      t.string :online_status
      t.datetime :last_seen_at

      t.timestamps
    end
  end
end
