# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  cast        :string
#  description :text             not null
#  keywords    :text
#  rating      :string           not null
#  runtime     :string           not null
#  tags        :string           not null
#  title       :string           not null
#  topic       :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  brand_id    :integer          not null
#
# Indexes
#
#  index_movies_on_title  (title)
#
require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
