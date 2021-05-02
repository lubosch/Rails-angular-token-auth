module BareApi
  module Users
    class RegistrationsController < Devise::RegistrationsController
      def create
        build_resource(sign_up_params)
        resource.save
        sign_up(resource_name, resource) if resource.persisted?

        render_jsonapi_response(resource, UserSerializer)
      end
    end
  end
end
