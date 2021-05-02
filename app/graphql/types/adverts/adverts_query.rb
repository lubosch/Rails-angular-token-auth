module Types
  module Adverts
    class AdvertsQuery < BaseObject
      field :list, AdvertType.connection_type, null: false

      def list
        ::Advert.includes(title_image_attachment: :blob)
      end
    end
  end
end
