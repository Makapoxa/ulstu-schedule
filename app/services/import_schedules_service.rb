require 'open-uri'
class ImportSchedulesService

  def self.load_schedules
    agent = Mechanize.new
    page = agent.get('http://ulstu.ru/schedule/students/raspisan.htm')
    page.links.each do |link|
      if link.text.present? && link.href.present?
        schedule =  Schedule.find_or_create_by(name: link.text)
        url = "http://ulstu.ru/schedule/students/#{link.href}"
        schedule.link = url if schedule.link != url
        schedule.save
      end
    end
  end

  def self.load_days(schedule_id)
    days = ['Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт']
    schedule = Schedule.find_by(id: schedule_id)
    return unless schedule;
    doc = Nokogiri::HTML(open(schedule.link))
    table = []
    doc.css('tr').each do |tr|
      table << tr.css('td p').map(&:text)
    end
    table.each_with_index do |row, id|
      next unless days.include? row.first
      day = schedule.days.find_or_create_by(name: row.shift, week: (id > 7 ? 2 : 1))
      day.pairs.map(&:destroy)
      row.each do |pair|
        day.pairs.create(info: pair)
      end
    end
  end
end
