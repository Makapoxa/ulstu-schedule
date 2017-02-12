import ReactOnRails from 'react-on-rails';

import ChooseGroup from '../components/ChooseGroup';
import Schedule from '../components/Schedule';
import Day from '../components/Day';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Day,
  Schedule,
  ChooseGroup,
});
