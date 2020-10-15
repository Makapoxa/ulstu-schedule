import React from 'react';
import PropTypes from 'prop-types';

export default class Pair extends React.PureComponent {
  render() {
    const { index, pair, time } = this.props;
    return (
      <tr className="border adjust-height">
        <td className="col-xs-3 center">
          <b><font className="number">{ index + 1 }</font></b>
          :&nbsp;&nbsp;
          { time }
        </td>
        <td className="col-xs-9 pair center">{ pair }</td>
      </tr>
    );
  }
}

Pair.propTypes = {
  index: PropTypes.number.isRequired,
  pair: PropTypes.string,
  time: PropTypes.string.isRequired,
};

Pair.defaultProps = {
  pair: '',
};
