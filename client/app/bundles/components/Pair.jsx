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
      <tr className='border adjust-height'>
        <td className='col-xs-3 center'><b><font className='number'>{index + 1}</font></b>:&nbsp;&nbsp;{time}</td>
        <td className='col-xs-9 pair center'>{pair}</td>
      </tr>
    );
  }
}
