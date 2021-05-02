# == Schema Information
#
# Table name: adverts
#
#  id          :bigint           not null, primary key
#  description :text
#  price       :decimal(16, 2)   not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint           not null
#
# Indexes
#
#  index_adverts_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class ImageSerializer
  include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  attributes :filename

  attribute :url do |object|
    Rails.application.routes.url_helpers.rails_blob_path(object, only_path: true)
  end
end
