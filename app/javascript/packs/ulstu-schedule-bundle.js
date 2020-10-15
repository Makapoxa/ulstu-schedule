import 'bootstrap';
import 'select2';

import '../css/ulstu-schedule.scss';

import ReactOnRails from 'react-on-rails';

import ChooseGroup from '../bundles/UlstuSchedule/components/ChooseGroup';
import Schedule from '../bundles/UlstuSchedule/components/Schedule';
import Day from '../bundles/UlstuSchedule/components/Day';
import Pair from '../bundles/UlstuSchedule/components/Pair';

ReactOnRails.register({
  Day,
  Schedule,
  ChooseGroup,
  Pair,
});
