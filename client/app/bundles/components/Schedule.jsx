import React, { PropTypes } from 'react';
import Day from './Day';

export default class Schedule extends React.Component {
  static propTypes = {
    schedule: PropTypes.shape({
      id: PropTypes.integer,
      text: PropTypes.string,
      days: PropTypes.array,
    }),
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { week: 1 };
  }

  selectWeek(event) {
    this.setState({week: event.target.value});
  }

  render() {
    const {days} = this.props.schedule;
    const {week} = this.state;
    return (
        <div>
          <br />
          <select className="form-control" onChange={this.selectWeek.bind(this)}>
            <option value={1}>Первая неделя</option>
            <option value={2}>Вторая неделя</option>
          </select>
        {
          days.filter(function(day){return day.week == week}).map(function(day, index) {
            return (<Day key={index} day={day} />);
          })
        }
        </div>
    );
  }
}
