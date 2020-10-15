import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Pair from './Pair';

export default class Day extends React.Component {
  componentDidMount() {
    if ($('#current').length) {
      window.addEventListener('load', () => {
        const offset = $('#current').offset().top;
        setTimeout($('html,body').animate({
          scrollTop: offset,
        }, 600), 1000);
      });
    }
  }

  render() {
    const { isCurrent, day, currentWeek } = this.props;
    const { pairs, name, week } = day;
    if (pairs[7] == null) {
      pairs.splice(7, 1);
    }
    if (pairs[6] == null) {
      pairs.splice(6, 1);
    }
    const times = [
      '8:00-9:30',
      '9:40-11:10',
      '11:30-13:00',
      '13:10-14:40',
      '14:50-16:20',
      '16:30-18:00',
      '18:10-19:40',
      '19:50-21:20',
      '21:30-23:00',
    ];

    return (
      <div>
        <div id={isCurrent && week === currentWeek ? 'current' : null}>
          { name }
          { isCurrent && week === currentWeek ? ' (Сегодня)' : null }
        </div>
        <table className="table table-striped">
          <tbody>
            {
              pairs.map((pair, index) => (
                <Pair
                  key={`pair-${name}-${times[index]}`}
                  pair={pair}
                  index={index}
                  time={times[index]}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Day.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  day: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pairs: PropTypes.arrayOf(PropTypes.string).isRequired,
    week: PropTypes.number.isRequired,
  }).isRequired,
  currentWeek: PropTypes.number.isRequired,
};
