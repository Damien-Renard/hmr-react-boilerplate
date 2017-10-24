import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router'; // eslint-disable-line

/* General */
import App from './app';

/* Website */
import HomePage from './src/sample/home';


export default (
  <Route path="/" component={App}>
    <IndexRedirect to="home" />
    <Route path="home" component={HomePage} />
  </Route>
);
