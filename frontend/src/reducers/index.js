import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'src/sagas';
import apiReducer from 'src/reducers/api';
import symbolSearchReducer from 'src/reducers/symbolSearch';

// eslint-disable-next-line no-undef
const createHistory = require('history').createBrowserHistory;

export const history = createHistory();

const reducers = {
  router: connectRouter(history),
  api: apiReducer,
  symbolSearch: symbolSearchReducer,
};

const createdRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(createdRouterMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
