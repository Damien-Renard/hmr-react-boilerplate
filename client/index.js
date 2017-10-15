import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import routes from './routes';

const history = syncHistoryWithStore(browserHistory, store);

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  (
    <Provider store={store} >
      <Router history={history} routes={routes} />
    </Provider>
  ),
  root,
);
