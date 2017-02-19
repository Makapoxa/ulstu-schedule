require 'open-uri'
class ImportSchedulesService
  def self.load_schedules
    agent = Mechanize.new
    page = agent.get('http://ulstu.ru/schedule/students/raspisan.htm')
    schedules = []
    page.links.each do |link|
      next if link.text.blank? || link.href.blank?
      url = link.href.split('.').first
      schedule = Schedule.new(text: link.text, url: url)
      schedules << schedule
    end
    schedules
  end

  def self.schedule(schedule_id)
    days = %w(Пнд Втр Срд Чтв Птн Сбт)
    schedule_url = "http://ulstu.ru/schedule/students/#{schedule_id}.htm"
    doc = Nokogiri::HTML(open(schedule_url))
    name = doc.css('font')[1].text
    table = []
    doc.css('tr').each do |tr|
      table << tr.css('td p').map(&:text)
    end
    schedule_days = []
    table.each_with_index do |row, id|
      next unless days.include? row.first
      day = Day.new(name: row.shift, week: (id > 7 ? 2 : 1))
      day.pairs = row.map do |pair|
        Pair.new(info: pair)
      end
      schedule_days << day
    end

    week = (Date.parse(Time.current.to_s).cweek % 2)
    week = 2 if week.zero?
    current_day = (Date.parse(Time.current.to_s).cwday - 1)
    Schedule.new(text: name, url: schedule_url, days: schedule_days, week: week, current_day: current_day)
  end
end
