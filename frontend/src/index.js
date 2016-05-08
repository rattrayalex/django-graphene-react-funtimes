import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Adrenaline } from 'adrenaline';


import reducers from './reducers';
import routes from './routes';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Adrenaline endpoint='http://localhost:8000/graphql' >
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  </Adrenaline>,
  document.getElementById('app')
);
