module BareApi
  module Users
    class ProfilesController < BareApi::BaseController
      before_action :doorkeeper_authorize!

      def index
        render_jsonapi_response(current_user, UserSerializer)
      end
    end
  end
end
