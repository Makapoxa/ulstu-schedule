class Schedule
  attr_accessor :days, :url, :text

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def to_hash
    attrs = {
      url: url,
      text: text
    }
    attrs[:days] = days.map(&:to_hash) if days.present?
    attrs
  end
end
