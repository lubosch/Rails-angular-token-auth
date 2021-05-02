class ApplicationController < ActionController::API
  def render_jsonapi_response(resource, serializer)
    if resource.errors.empty?
      render json: serializer.new(resource).serializable_hash
    else
      render jsonapi_errors: resource.errors, status: 400
    end
  end
end
