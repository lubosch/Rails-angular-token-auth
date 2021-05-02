require 'json'

namespace :graphql do
  desc 'Dumps the GraphQL IDL schema'
  task dump: [:environment] do
    target = Rails.root.join('app/graphql/schema.graphql')
    definition = BareBazarSchema.to_definition
    File.write(target, definition)
  end
end
