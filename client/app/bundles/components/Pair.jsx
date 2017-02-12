import React, { PropTypes } from 'react';

export default class Pair extends React.Component {
  static propTypes = {
    pair: PropTypes.string,
  };

  constructor(props, _railsContext) {
    super(props);
  }

  render () {
    const {pair} = this.props;
    return (
      <div className='form-control'>{pair}</div>
    );
  }
}
