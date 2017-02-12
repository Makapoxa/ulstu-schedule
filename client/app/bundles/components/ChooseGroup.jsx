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
    $(this.refs.select2).select2();
  }

  handleSubmit() {
    const url = '/session?group_id=' + $(this.refs.select2).val();
    document.location.assign(url);
  }

  render() {
    const {schedules} = this.props;
    return (
      <div className='col-md-12 col-xs-12'>
        <div className='form-group'>
          <select ref='select2'>
            {
              schedules.map(function(schedule) {
                return (<option key={schedule.id} value={schedule.id}>{schedule.text}</option>);
              })
            }
          </select>
          <br />
          <br />
          <button type='button' className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Подтвердить</button>
        </div>
      </div>
    );
  }
}
