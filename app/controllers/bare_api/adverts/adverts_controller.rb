module BareApi
  module Adverts
    class AdvertsController < BareApi::BaseController
      before_action :doorkeeper_authorize!, only: %i[create]

      def index
        render json: AdvertSerializer.new(Advert.all, { include: %i[title_image_attachment] }).serializable_hash
      end

      def create
        advert = ::Adverts::CreateAdvert.call(params, current_user)
        render_jsonapi_response(advert, AdvertSerializer)
      end

      def show

      end
    end
  end
end
