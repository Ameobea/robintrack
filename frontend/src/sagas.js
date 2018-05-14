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
  getPopularityRanking,
  getNeighborRankings,
  getTotalSymbols,
} from 'src/selectors/api';

const retryCount = 3;
const retryTimeoutMs = 5000;

const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Generic wrapper that makes a request to and API endpoint and handles errors with the
 * request including non-success response codes and connection errors.  Handles automatically
 * re-requesting the endpoints with timeouts in between.
 *
 * @param {string} endpoint string appended to the API base path to create the final URL.
 */
function* apiCall(apiFunction, args, retries = 0) {
  try {
    const res = yield call(apiFunction, ...args);

    if (res.status === 200) {
      return yield res.json();
    } else {
      // TODO: show alert to user
    }
  } catch (err) {
    if (retries < retryCount) {
      console.warn(
        `API request failed; retrying #${retries +
          1} after ${retryTimeoutMs}ms...`
      );
      yield delay(retryTimeoutMs);
      yield apiCall(apiFunction, args, retries + 1);
    } else {
      console.error('API request failed and max retries reached!');
      // TODO: show alert to user
    }
  }
}

function* fetchQuote({ symbol }) {
  const existingQuote = yield select(getQuote(symbol));
  if (existingQuote) {
    return;
  }

  const quote = yield apiCall(Api.fetchQuote, [symbol]);
  yield put({ type: apiActions.QUOTE_FETCHED, symbol, quote });
}

function* fetchTopSymbols({ limit, startIndex, cb }) {
  const existingTopSymbols = yield select(getTopSymbols(limit, startIndex));
  if (existingTopSymbols.length === limit) {
    return;
  }

  const topSymbols = yield apiCall(Api.fetchTopSymbols, [limit, startIndex]);
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

  const bottomSymbols = yield apiCall(Api.fetchBottomSymbols, [
    limit,
    startIndex,
  ]);
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

  const popHistory = yield apiCall(Api.fetchPopularityHistory, [symbol]);
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

  const quoteHistory = yield apiCall(Api.fetchQuoteHistory, [symbol]);
  yield put({
    type: apiActions.QUOTE_HISTORY_FETCHED,
    symbol,
    payload: quoteHistory,
  });
}

function* fetchLargestPopularityChanges({ type, cb, ...props }) {
  const popularityChangesSelector = getPopularityChanges(props);
  const existingPopularityChanges = R.slice(
    props.startIndex,
    props.startIndex + props.limit,
    (yield select(popularityChangesSelector)) || []
  );
  if (existingPopularityChanges.length === props.limit) {
    return;
  }

  const popularityChanges = yield apiCall(Api.fetchPopularityChanges, [props]);
  yield put({
    type: apiActions.LARGEST_POPULARITY_CHANGES_FETCHED,
    payload: popularityChanges,
    ...props,
  });

  cb && cb();
}

function* fetchPopularityRanking({ symbol }) {
  const existingPopularityRanking = yield select(getPopularityRanking(symbol));
  if (!R.isNil(existingPopularityRanking)) {
    return;
  }

  const { ranking: popularityRanking } = yield apiCall(
    Api.fetchSymbolPopularityRanking,
    [symbol]
  );
  yield put({
    type: apiActions.POPULARITY_RANKING_FETCHED,
    symbol,
    popularityRanking,
  });
}

function* fetchNeighborRankingSymbols({ middleRanking }) {
  const existingNeighborRankings = yield select(
    getNeighborRankings(middleRanking)
  );
  const expectedLength = middleRanking === 1 ? 2 : 3;
  if (
    existingNeighborRankings.length === expectedLength &&
    !!existingNeighborRankings[0]
  ) {
    return;
  }

  // Insert placeholder values for the symbols while the API request is pending to
  // avoid making duplicate requests
  yield put({
    type: apiActions.NEIGHBOR_RANKING_SYMBOLS_FETCHED,
    middleRanking,
    curSymbol: null,
    previousSymbol: null,
    nextSymbol: null,
  });

  const apiRes = yield apiCall(Api.fetchLastNextPopularities, [middleRanking]);
  const [previousSymbol, curSymbol, nextSymbol] =
    apiRes.length === 2 ? [null, ...apiRes] : apiRes;

  yield put({
    type: apiActions.NEIGHBOR_RANKING_SYMBOLS_FETCHED,
    middleRanking,
    curSymbol,
    previousSymbol,
    nextSymbol,
  });

  if (previousSymbol) {
    yield put({
      type: apiActions.POPULARITY_RANKING_FETCHED,
      symbol: previousSymbol.symbol,
      popularityRanking: middleRanking - 1,
    });
  }
  if (nextSymbol) {
    yield put({
      type: apiActions.POPULARITY_RANKING_FETCHED,
      symbol: nextSymbol.symbol,
      popularityRanking: middleRanking + 1,
    });
  }
}

function* fetchTotalSymbols({ hoursAgo }) {
  const existingSymbolCount = yield select(getTotalSymbols);
  if (!R.isNil(existingSymbolCount)) {
    return;
  }

  const { total_symbols: totalSymbols } = yield apiCall(Api.fetchSymbolCount, [
    hoursAgo,
  ]);
  yield put({ type: apiActions.TOTAL_SYMBOLS_FETCHED, totalSymbols });
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
  yield takeEvery(apiActions.FETCH_POPULARITY_RANKING, fetchPopularityRanking);
  yield takeEvery(
    apiActions.FETCH_NEIGHBOR_RANKING_SYMBOLS,
    fetchNeighborRankingSymbols
  );
  yield takeLatest(apiActions.FETCH_TOTAL_SYMBOLS, fetchTotalSymbols);
}

export default rootSaga;
