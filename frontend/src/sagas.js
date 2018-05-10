import { call, select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as R from 'ramda';

import * as apiActions from 'src/actions/api';
import * as Api from 'src/api';
import {
  getQuote,
  getPopularityHistory,
  getQuoteHistory,
  getTopSymbols,
  getBottomSymbols,
  getPopularityChanges,
} from 'src/selectors/api';

function* fetchQuote({ symbol }) {
  const existingQuote = yield select(getQuote(symbol));
  if (existingQuote) {
    return;
  }

  const quote = yield call(Api.fetchQuote, symbol);
  yield put({ type: apiActions.QUOTE_FETCHED, symbol, quote });
}

function* fetchTopSymbols({ limit, startIndex, cb }) {
  const existingTopSymbols = yield select(getTopSymbols(limit, startIndex));
  if (existingTopSymbols.length === limit) {
    return;
  }

  const topSymbols = yield call(Api.fetchTopSymbols, limit, startIndex);
  yield put({
    type: apiActions.TOP_SYMBOLS_FETCHED,
    limit,
    startIndex,
    payload: topSymbols,
  });

  cb && cb();
}

function* fetchBottomSymbols({ limit, startIndex, cb }) {
  const existingBottomSymbols = yield select(
    getBottomSymbols(limit, startIndex)
  );
  if (existingBottomSymbols.length === limit) {
    return;
  }

  const bottomSymbols = yield call(Api.fetchBottomSymbols, limit, startIndex);
  yield put({
    type: apiActions.BOTTOM_SYMBOLS_FETCHED,
    limit,
    startIndex,
    payload: bottomSymbols,
  });

  cb && cb();
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

function* fetchLargestPopularityChanges({ type, cb, ...props }) {
  console.log(props);
  const popularityChangesSelector = getPopularityChanges(props);
  const existingPopularityChanges = R.slice(
    props.startIndex,
    props.startIndex + props.limit,
    (yield select(popularityChangesSelector)) || []
  );
  if (existingPopularityChanges.length === props.limit) {
    return;
  }

  const popularityChanges = yield call(Api.fetchPopularityChanges, props);
  yield put({
    type: apiActions.LARGEST_POPULARITY_CHANGES_FETCHED,
    payload: popularityChanges,
    ...props,
  });

  cb && cb();
}

function* rootSaga() {
  yield takeLatest(apiActions.FETCH_QUOTE_REQUESTED, fetchQuote);
  yield takeEvery(apiActions.FETCH_TOP_SYMBOLS_REQUESTED, fetchTopSymbols);
  yield takeEvery(
    apiActions.FETCH_BOTTOM_SYMBOLS_REQUESTED,
    fetchBottomSymbols
  );
  yield takeLatest(
    apiActions.FETCH_POPULARITY_HISTORY_REQUESTED,
    fetchPopularityHistory
  );
  yield takeLatest(apiActions.FETCH_QUOTE_HISTORY_REQUESTED, fetchQuoteHistory);
  yield takeEvery(
    apiActions.FETCH_LARGEST_POPULARITY_CHANGES_REQUESTED,
    fetchLargestPopularityChanges
  );
}

export default rootSaga;
