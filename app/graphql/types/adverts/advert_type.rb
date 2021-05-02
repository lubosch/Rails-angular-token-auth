module Types
  module Adverts
    class AdvertType < BaseObject
      field :id, ID, null: false
      field :title, String, null: false
      field :description, String, null: true

      field :title_image, Attachments::ImageType, null: false

      def title_image
        object.title_image if object.title_image.attached?
      end
    end
  end
end
