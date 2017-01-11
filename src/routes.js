import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Users from './components/Users';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Users}/>
    <Route path="/users" component={Users} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
