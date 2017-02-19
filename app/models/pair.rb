class Pair
  attr_accessor :info

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def to_s
    window = '_  '
    result = info.include?(window) ? nil : info if info
    result
  end
end
