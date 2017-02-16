class Pair
  attr_accessor :info

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def to_s
    result = (info.include? '_  ') ? nil : info
    result
  end
end
