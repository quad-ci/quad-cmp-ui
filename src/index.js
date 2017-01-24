import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes';

injectTapEventPlugin(); // Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941

ReactDOM.render(
  <MuiThemeProvider>
    <Routes history={browserHistory} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
