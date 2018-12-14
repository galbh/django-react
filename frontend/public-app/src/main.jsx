import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import 'react-sortable-tree/style.css';

import Routes from './routes.jsx';
import rootReducer from './common/reducers';

let middlewares;

if (process.env.NODE_ENV === 'production') {
  middlewares = applyMiddleware(thunk);
} else {
  middlewares = applyMiddleware(thunk, logger);
}

const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <Routes store={store} />,
  document.getElementById('root')
);
