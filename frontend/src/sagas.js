import { call, put, takeEvery } from 'redux-saga/effects';

import * as apiActions from 'src/actions/api';
import * as Api from 'src/api';

function* fetchQuote({ symbol }) {
  const quote = yield call(Api.fetchQuote);
  yield put({ type: apiActions.QUOTE_FETCHED, quote });
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

function* rootSaga() {
  yield takeEvery(apiActions.FETCH_QUOTE_REQUESTED, fetchQuote);
  yield takeEvery(apiActions.FETCH_TOP_SYMBOLS_REQUESTED, fetchTopSymbols);
  yield takeEvery(
    apiActions.FETCH_BOTTOM_SYMBOLS_REQUESTED,
    fetchBottomSymbols
  );
}

export default rootSaga;
