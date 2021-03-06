module BareApi
  module Users
    class SessionsController < Devise::SessionsController
      private

      def respond_with(resource, _opts = {})
        render_jsonapi_response(resource, UserSerializer)
      end

      def respond_to_on_destroy
        head :no_content
      end
    end
  end
end
