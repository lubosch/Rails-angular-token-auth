module Types
  module Users
    class UsersQuery < BaseObject
      field :profile, ProfileType, null: false

      def profile
        context[:current_user]
      end
    end
  end
end
