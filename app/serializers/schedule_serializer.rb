class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :text, :url

  def text
    object.name
  end
  def url
    object.link
  end
end
