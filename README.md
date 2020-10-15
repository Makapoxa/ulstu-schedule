# Расписание УлГТУ

[![Heroku](https://heroku-badge.herokuapp.com/?app=ulstu-schedule)](https://ulstu-schedule.herokuapp.com/)
[![Build Status](https://travis-ci.com/Makapoxa/ulstu-schedule.svg?branch=master)](https://travis-ci.com/Makapoxa/ulstu-schedule)

Сайт для упрощения поиска своего расписания. Select2, текущая неделя, текущий день, расписание в форме таблицы, адаптивная верстка.
Больше не нужно заходить на неудобный сайт с обычной html таблицей, которую невозможно просматривать с телефона.

Зависимости:
```
ruby v2.5.1
bundler v2.1.4
node_js v14.13.1

```

Запуск на локалке:
```
bundle
yarn
bin/webpack
foreman start -f Procfile.dev
```

Или просто посетите https://ulstu-schedule.herokuapp.com/
