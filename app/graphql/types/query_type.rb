module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :adverts, Adverts::AdvertsQuery, null: false

    def adverts
      true
    end

    field :users, Users::UsersQuery, null: false

    def users
      true
    end
  end
end