import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App/App';
import Users from './components/Users';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/users" component={Users} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
