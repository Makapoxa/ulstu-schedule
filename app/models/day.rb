class Day < ApplicationRecord
  belongs_to :schedule
  has_many :pairs
end
