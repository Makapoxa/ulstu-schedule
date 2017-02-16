class Day
  attr_accessor :name, :pairs, :week

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def to_hash
    {
      week: week,
      name: name,
      pairs: pairs.map(&:to_s)
    }
  end
end
