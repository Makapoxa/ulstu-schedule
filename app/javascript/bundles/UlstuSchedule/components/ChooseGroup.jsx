import React from 'react';
import { PropTypes } from 'prop-types';
import $ from 'jquery';

export default class ChooseGroup extends React.Component {
  static propTypes = {
    schedules: PropTypes.array,
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { groupId: '', currentPart: '' };
  }

  componentDidMount() {
    $('.select2').select2().on('select2:selecting', this.handleChange.bind(this));
  }

  handleChange(e) {
    const { url, part } = JSON.parse(e.params.args.data.id);
    this.setState({ groupId: url, currentPart: part });
  }

  url() {
    return `/session?group_url=${this.state.groupId}&part=${this.state.currentPart}`;
  }

  render() {
    const { schedules } = this.props;
    const courses = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
      sixth: [],
    };

    schedules.map((schedule) => {
      const number = parseInt(schedule.text.split('-')[schedule.text.split('-').length - 1]);
      switch (Math.floor(number / 10)) {
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
        case 5:
          courses.fifth.push(schedule);
          break;
        default:
          courses.sixth.push(schedule);
          break;
      }
    });

    return (
      <div className="form-group" id="schedules">
        <br />
        <select className="select2 form-control" onChange={this.handleChange.bind(this)}>
          <optgroup label="Первый курс">
            {
              courses.first.map((schedule) => (<option key={schedule.url + schedule.part} value={JSON.stringify({ url: schedule.url, part: schedule.part })}>{schedule.text}</option>))
            }
          </optgroup>
          <optgroup label="Второй курс">
            {
              courses.second.map((schedule) => (<option key={schedule.url + schedule.part} value={JSON.stringify({ url: schedule.url, part: schedule.part })}>{schedule.text}</option>))
            }
          </optgroup>
          <optgroup label="Третий курс">
            {
              courses.third.map((schedule) => (<option key={schedule.url + schedule.part} value={JSON.stringify({ url: schedule.url, part: schedule.part })}>{schedule.text}</option>))
            }
          </optgroup>
          <optgroup label="Четвертый курс">
            {
              courses.fourth.map((schedule) => (<option key={schedule.url + schedule.part} value={JSON.stringify({ url: schedule.url, part: schedule.part })}>{schedule.text}</option>))
            }
          </optgroup>
          <optgroup label="Пятый курс">
            {
              courses.fifth.map((schedule) => (<option key={schedule.url + schedule.part} value={JSON.stringify({ url: schedule.url, part: schedule.part })}>{schedule.text}</option>))
            }
          </optgroup>
          <optgroup label="Дополнительно">
            {
              courses.sixth.map((schedule) => (<option key={schedule.url + schedule.part} value={JSON.stringify({ url: schedule.url, part: schedule.part })}>{schedule.text}</option>))
            }
          </optgroup>
        </select>
        <br />
        <br />
        <a href={this.url()} className="btn btn-primary">Подтвердить</a>
      </div>
    );
  }
}
