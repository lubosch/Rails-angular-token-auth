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
class Advert < ApplicationRecord
  belongs_to :user

  has_one_attached :title_image
  has_many_attached :images

  validates_presence_of :title
end
