import React from 'react';
import { PropTypes } from 'prop-types';
import $ from 'jquery';
import Day from './Day';

export default class Schedule extends React.Component {
  static propTypes = {
    week: PropTypes.number,
    currentDay: PropTypes.number,
    schedule: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      days: PropTypes.array,
    }),
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { week: props.schedule.week };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ week: event.target.value });
  }

  render() {
    const { days } = this.props.schedule;
    const { currentDay } = this.props;
    const { week } = this.state;
    return (
      <div>
        <br />
        <select className="form-control" value={week} onChange={this.handleChange}>
          <option value={1}>
            Первая неделя
            {this.props.schedule.week == 1 ? '(Сейчас)' : null}
          </option>
          <option value={2}>
            Вторая неделя
            {this.props.schedule.week == 2 ? '(Сейчас)' : null}
          </option>
        </select>
        <br />
        {
            days.filter((day) => day.week == week).map((day, index) => (<Day key={index} day={day} isCurrent={currentDay == index} />))
          }
      </div>
    );
  }
}
