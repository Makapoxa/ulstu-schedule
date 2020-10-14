class Schedule
  attr_accessor :days, :url, :text, :week, :current_day, :part

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def to_hash
    attrs = {
      url: url,
      text: text,
      currentDay: current_day,
      week: week,
      part: part
    }
    attrs[:days] = days.map(&:to_hash) if days.present?
    attrs
  end
end
