module Adverts
  class CreateAdvert < Service
    attr_reader :params, :user, :advert

    def initialize(params, user)
      super
      @params = params
      @user = user
      @advert = Advert.new(user: user)
    end

    def call
      Advert.transaction do
        advert.assign_attributes(params.permit(:title, :description, :price))
        advert.title_image = params[:image_source]
        advert.save
        advert
      end
    end
  end
end
