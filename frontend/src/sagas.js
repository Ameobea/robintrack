import { call, select, put, takeLatest } from 'redux-saga/effects';

import * as apiActions from 'src/actions/api';
import * as Api from 'src/api';
import {
  getQuote,
  getPopularityHistory,
  getQuoteHistory,
  getTopSymbols,
  getBottomSymbols,
} from 'src/selectors/api';

function* fetchQuote({ symbol }) {
  const existingQuote = yield select(getQuote(symbol));
  if (existingQuote) {
    return;
  }

  const quote = yield call(Api.fetchQuote, symbol);
  yield put({ type: apiActions.QUOTE_FETCHED, symbol, quote });
}

function* fetchTopSymbols() {
  const existingTopSymbols = yield select(getTopSymbols);
  if (existingTopSymbols) {
    return;
  }

  const topSymbols = yield call(Api.fetchTopSymbols);
  yield put({ type: apiActions.TOP_SYMBOLS_FETCHED, payload: topSymbols });
}

function* fetchBottomSymbols() {
  const existingBottomSymbols = yield select(getBottomSymbols);
  if (existingBottomSymbols) {
    return;
  }

  const bottomSymbols = yield call(Api.fetchBottomSymbols);
  yield put({
    type: apiActions.BOTTOM_SYMBOLS_FETCHED,
    payload: bottomSymbols,
  });
}

function* fetchPopularityHistory({ symbol }) {
  const existingPopHistory = yield select(getPopularityHistory(symbol));
  if (existingPopHistory) {
    return;
  }

  const popHistory = yield call(Api.fetchPopularityHistory, symbol);
  yield put({
    type: apiActions.POPULARITY_HISTORY_FETCHED,
    symbol,
    payload: popHistory,
  });
}

function* fetchQuoteHistory({ symbol }) {
  const existingQuoteHistory = yield select(getQuoteHistory(symbol));
  if (existingQuoteHistory) {
    return;
  }

  const quoteHistory = yield call(Api.fetchQuoteHistory, symbol);
  yield put({
    type: apiActions.QUOTE_HISTORY_FETCHED,
    symbol,
    payload: quoteHistory,
  });
}

function* rootSaga() {
  yield takeLatest(apiActions.FETCH_QUOTE_REQUESTED, fetchQuote);
  yield takeLatest(apiActions.FETCH_TOP_SYMBOLS_REQUESTED, fetchTopSymbols);
  yield takeLatest(
    apiActions.FETCH_BOTTOM_SYMBOLS_REQUESTED,
    fetchBottomSymbols
  );
  yield takeLatest(
    apiActions.FETCH_POPULARITY_HISTORY_REQUESTED,
    fetchPopularityHistory
  );
  yield takeLatest(apiActions.FETCH_QUOTE_HISTORY_REQUESTED, fetchQuoteHistory);
}

export default rootSaga;
