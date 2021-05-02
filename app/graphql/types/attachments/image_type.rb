module Types
  module Attachments
    class ImageType < BaseObject
      field :id, ID, null: false
      field :filename, String, null: true

      field :url, String, null: true

      def url
        Rails.application.routes.url_helpers.rails_blob_path(object, only_path: true)
      end
    end
  end
end
