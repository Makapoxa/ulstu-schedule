import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = { weekState: props.schedule.week };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ weekState: parseInt(event.target.value, 10) });
  }

  render() {
    const { schedule } = this.props;
    const { weekState } = this.state;
    const { days, week, currentDay } = schedule;
    const daysRender = days.filter((day) => day.week === weekState).map((day, index) => (
      <Day
        key={day.name + day.week}
        day={day}
        isCurrent={currentDay === index}
        currentWeek={week}
      />
    ));
    return (
      <div>
        <br />
        <select className="form-control" value={weekState} onChange={this.handleChange}>
          <option value={1}>
            Первая неделя
            { week === 1 ? ' (Сейчас)' : null }
          </option>
          <option value={2}>
            Вторая неделя
            { week === 2 ? ' (Сейчас)' : null }
          </option>
        </select>
        <br />
        {
          daysRender
        }
      </div>
    );
  }
}

Schedule.propTypes = {
  schedule: PropTypes.shape({
    days: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      pairs: PropTypes.arrayOf(PropTypes.string).isRequired,
      week: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    week: PropTypes.number.isRequired,
    currentDay: PropTypes.number.isRequired,
  }).isRequired,
};
