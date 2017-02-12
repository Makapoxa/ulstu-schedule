class DaySerializer < ActiveModel::Serializer
  attributes :name, :pairs, :week

  def pairs
    object.pairs.map do |pair|
      if pair.info.include? '_  '
        nil
      else
        pair.info
      end
    end
  end
end
