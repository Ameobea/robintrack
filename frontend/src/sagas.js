import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiActions from 'src/actions/api';
import * as Api from 'src/api';

function* fetchQuote({ symbol }) {
  const quote = yield call(Api.fetchQuote, symbol);
  yield put({ type: apiActions.QUOTE_FETCHED, symbol, quote });
}

function* fetchTopSymbols() {
  const topSymbols = yield call(Api.fetchTopSymbols);
  yield put({ type: apiActions.TOP_SYMBOLS_FETCHED, payload: topSymbols });
}

function* fetchBottomSymbols() {
  const bottomSymbols = yield call(Api.fetchBottomSymbols);
  yield put({
    type: apiActions.BOTTOM_SYMBOLS_FETCHED,
    payload: bottomSymbols,
  });
}

function* fetchPopularityHistory({ symbol }) {
  const popHistory = yield call(Api.fetchPopularityHistory, symbol);
  yield put({
    type: apiActions.POPULARITY_HISTORY_FETCHED,
    symbol,
    payload: popHistory,
  });
}

function* fetchQuoteHistory({ symbol }) {
  const quoteHistory = yield call(Api.fetchQuoteHistory, symbol);
  yield put({
    type: apiActions.QUOTE_HISTORY_FETCHED,
    symbol,
    payload: quoteHistory,
  });
}

function* rootSaga() {
  yield takeEvery(apiActions.FETCH_QUOTE_REQUESTED, fetchQuote);
  yield takeEvery(apiActions.FETCH_TOP_SYMBOLS_REQUESTED, fetchTopSymbols);
  yield takeEvery(
    apiActions.FETCH_BOTTOM_SYMBOLS_REQUESTED,
    fetchBottomSymbols
  );
  yield takeEvery(
    apiActions.FETCH_POPULARITY_HISTORY_REQUESTED,
    fetchPopularityHistory
  );
  yield takeEvery(apiActions.FETCH_QUOTE_HISTORY_REQUESTED, fetchQuoteHistory);
}

export default rootSaga;
