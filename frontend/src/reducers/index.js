import { applyMiddleware, createStore, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'src/sagas';

const reducers = {};

export const history = createHistory();

const _routerMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(_routerMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
