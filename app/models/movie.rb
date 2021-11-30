# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  rating      :string           not null
#  runtime     :string           not null
#  title       :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  brand_id    :integer          not null
#
# Indexes
#
#  index_movies_on_title  (title)
#
class Movie < ApplicationRecord
  validates :title, :description, :runtime, :rating, :year, :brand_id, presence: true

  belongs_to :brands,
    class_name: :Brand,
    foreign_key: :brand_id

  has_one_attached :image 
  has_one_attached :index_movie
  has_one_attached :movie
end
