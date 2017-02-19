import React, { PropTypes } from 'react';
import Pair from './Pair';

export default class Day extends React.Component {
  static propTypes = {
    day: PropTypes.object,
    isCurrent: PropTypes.bool,
  };

  constructor(props, _railsContext) {
    super(props);
  }

  componentDidMount() {
    if ($("#current").length) {
      const offset = $("#current").offset().top - 10;
      $("html,body").animate({
        scrollTop: offset
      });
    }
  }

  render () {
    const {isCurrent, day} = this.props;
    var {pairs} = this.props.day;
    if (pairs[7] == null) {
      pairs.splice(7, 1);
    }
    if (pairs[6] == null) {
      pairs.splice(6, 1);
    }

    return (
      <div>
        <div id={isCurrent ? 'current' : null}>{day.name}{isCurrent ? " (Сегодня)" : null}</div>
        <table className='table table-striped'>
          <tbody>
            {pairs.map(function(pair, index) {
              return (<Pair key={index} pair={pair} index={index} />);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
