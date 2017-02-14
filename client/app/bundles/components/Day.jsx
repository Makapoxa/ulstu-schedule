import React, { PropTypes } from 'react';
import Pair from './Pair';

export default class Day extends React.Component {
  static propTypes = {
    day: PropTypes.object,
  };

  constructor(props, _railsContext) {
    super(props);
  }

  render () {
    const {day} = this.props;
    var {pairs} = this.props.day;
    if (pairs[7] == null) {
      pairs.splice(7, 1);
    }
    if (pairs[6] == null) {
      pairs.splice(6, 1);
    }

    return (
      <div>
        <div>{day.name}</div>
        {pairs.map(function(pair, index) {
          return <Pair key={index} pair={pair} index={index} />;
        })}
      </div>
    );
  }
}
