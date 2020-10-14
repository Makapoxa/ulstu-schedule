import ReactOnRails from 'react-on-rails';
import 'bootstrap';
import 'select2';
import 'css/ulstu-schedule';
import 'bootstrap/dist/css/bootstrap.min.css';

import ChooseGroup from '../bundles/UlstuSchedule/components/ChooseGroup';
import Schedule from '../bundles/UlstuSchedule/components/Schedule';
import Day from '../bundles/UlstuSchedule/components/Day';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Day,
  Schedule,
  ChooseGroup,
});
