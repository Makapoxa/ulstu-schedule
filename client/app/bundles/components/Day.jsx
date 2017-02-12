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
    const {pairs} = this.props.day;
    return (
      <div>
      <div>{day.name}</div>
      <div>
        {pairs.map(function(pair, index) {
          return <Pair key={index} pair={pair} />;
        })}
      </div>
    </div>
    );
  }
}
