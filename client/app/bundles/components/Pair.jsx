import React, { PropTypes } from 'react';

export default class Pair extends React.Component {
  static propTypes = {
    index: PropTypes.integer,
    pair: PropTypes.string,
  };

  constructor(props, _railsContext) {
    super(props);
  }

  render () {
    const {index, pair} = this.props;
    var time = null;
    switch (index) {
      case 0:
        time = '8:00-9:30';
        break;
      case 1:
        time = '9:40-11:10';
        break;
      case 2:
        time = '11:30-13:00';
        break;
      case 3:
        time = '13:10-14:40';
        break;
      case 4:
        time = '14:50-16:20';
        break;
      case 5:
        time = '16:30-18:00';
        break;
      case 6:
        time = '18:10-19:40';
        break;
      case 7:
        time = '19:50-21:20';
        break;
    }
    return (
      <div className='form-control pair row'>
        <div className='col-md-1 col-xs-1'>{index + 1}</div>
        <div className='col-md-10 col-xs-9'>{pair}</div>
        <div className='col-md-1 col-xs-2'>{time}</div>
      </div>
    );
  }
}
