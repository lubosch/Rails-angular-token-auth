module Types
  module Users
    class ProfileType < BaseObject
      field :id, ID, null: false
      field :email, String, null: false
    end
  end
end
