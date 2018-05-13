import { applyMiddleware, createStore, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'src/sagas';
import apiReducer from 'src/reducers/api';
import popularityChangesReducer from 'src/reducers/popularityChanges';
import symbolSearchReducer from 'src/reducers/symbolSearch';

const reducers = {
  router: routerReducer,
  api: apiReducer,
  popularityChanges: popularityChangesReducer,
  symbolSearch: symbolSearchReducer,
};

export const history = createHistory();

const createdRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers(reducers),
  applyMiddleware(createdRouterMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
