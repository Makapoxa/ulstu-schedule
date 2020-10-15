# frozen_string_literal: true

require 'open-uri'
class ImportSchedulesService
  def self.load_schedules
    urls = [
      'https://www.ulstu.ru/schedule/students/part1/raspisan.html',
      'https://www.ulstu.ru/schedule/students/part2/raspisan.html',
      'https://www.ulstu.ru/schedule/students/part3/raspisan.html'
    ]

    urls.map { |url| get_schedule_data(url) }.flatten
  end

  def self.schedule(schedule_id, part)
    days = %w[Пнд Втр Срд Чтв Птн Сбт]

    schedule_url = "http://www.ulstu.ru/schedule/students/#{part}/#{schedule_id}.html"
    doc = Nokogiri::HTML(URI.open(schedule_url))
    name = doc.css('font')[1].text.gsub('Неделя: 1-я', '')

    table = doc.css('tr').each_with_object([]) do |tr, obj|
      obj << tr.css('td p').map(&:text)
    end

    schedule_days = table.each_with_object([]).with_index do |(row, obj), id|
      next unless days.include? row.first

      day = Day.new(name: row.shift, week: (id > 7 ? 2 : 1))
      day.pairs = row.map do |pair|
        Pair.new(info: pair)
      end
      obj << day
    end

    week = Date.parse(Time.current.to_s).cweek % 2
    week = 2 if week.zero?

    current_day = Date.parse(Time.current.to_s).cwday - 1

    Schedule.new(
      text: name,
      url: schedule_url,
      days: schedule_days,
      week: week,
      current_day: current_day
    )
  end

  def self.get_schedule_data(url)
    part = url.split('/').last(2).first
    agent = Mechanize.new
    page = agent.get(url)

    page.links.each_with_object([]) do |link, obj|
      next if link.text.blank? || link.href.blank?

      uri = link.href.split('.').first
      schedule = Schedule.new(text: link.text, url: uri, part: part)
      obj << schedule
    end
  end
end
