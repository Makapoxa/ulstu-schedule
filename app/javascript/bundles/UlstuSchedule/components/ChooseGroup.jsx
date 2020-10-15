import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

export default class ChooseGroup extends React.Component {
  constructor(props) {
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
    const { groupId, currentPart } = this.state;
    return `/session?group_url=${groupId}&part=${currentPart}`;
  }

  render() {
    const { schedules } = this.props;

    const courses = Array(6);

    schedules.forEach((schedule) => {
      const number = parseInt(schedule.text.split('-')[schedule.text.split('-').length - 1], 10);
      let index = Math.floor(number / 10);
      index = Number.isNaN(index) ? 5 : index - 1;

      if (courses[index] === undefined) {
        courses[index] = [];
      }

      courses[index].push(schedule);
    });

    const labels = [
      'Первый курс',
      'Второй курс',
      'Третий курс',
      'Четвертый курс',
      'Пятый курс',
      'Дополнительно',
    ];

    return (
      <div className="form-group" id="schedules">
        <br />
        <select className="select2 form-control">
          {
            courses.map((courseSchedules, i) => {
              const schedulesOptions = courseSchedules.map((schedule) => (
                <option
                  key={schedule.url + schedule.part}
                  value={JSON.stringify({ url: schedule.url, part: schedule.part })}
                >
                  { schedule.text }
                </option>
              ));

              return (<optgroup key={labels[i]} label={labels[i]}>{ schedulesOptions }</optgroup>);
            })
          }
        </select>
        <br />
        <br />
        <a href={this.url()} className="btn btn-primary">Подтвердить</a>
      </div>
    );
  }
}

ChooseGroup.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    part: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    currentDay: PropTypes.number,
    week: PropTypes.number,
  })).isRequired,
};
