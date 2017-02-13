import React, { PropTypes } from 'react';

export default class ChooseGroup extends React.Component {
  static propTypes = {
    schedules: PropTypes.array,
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { currentScheduleId: 0 };
  }

  componentDidMount() {
    $(this.refs.select2).select2({});
  }

  handleSubmit() {
    const url = '/session?group_id=' + $(this.refs.select2).val();
    document.location.assign(url);
  }

  render() {
    const {schedules} = this.props;
    var courses = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
    };

    schedules.map(function(schedule) {
      const number = parseInt(schedule.text.split('-')[schedule.text.split('-').length - 1]);
      switch(Math.floor(number / 10)) {
        case 1:
          courses.first.push(schedule);
          break;
        case 2:
          courses.second.push(schedule);
          break;
        case 3:
          courses.third.push(schedule);
          break;
        case 4:
          courses.fourth.push(schedule);
          break;
        default:
          courses.fifth.push(schedule);
          break;
      }
    });

    console.log(courses);

    return (
      <div className='col-md-12 selection'>
        <div className='form-group'>
          <select ref='select2' className='padding-top'>
          </select>
          <br />
          <br />
          <button type='button' className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Подтвердить</button>
        </div>
      </div>
    );
  }
}
