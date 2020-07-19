import { all, select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import queryString from 'query-string';
import * as R from 'ramda';

import * as apiActions from 'src/actions/api';
import * as routerActions from 'src/actions/router';
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
  symbolNotFound,
} from 'src/selectors/api';
import { getQueryParams } from 'src/selectors/router';

const retryCount = 60 * 4;
const retryTimeoutMs = 1000;

const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Checks if a given saga needs to be called or not.  The given list of selectors are called in
 * order, and if any of them return a truthy result, the saga doesn't need to run.
 *
 * Returns `true` if one or more of the selectors returned a truthy value and the saga does not
 * need to run.
 */
function* canSkip(...selectors) {
  const resultArray = yield all(selectors.map(selector => select(selector)));
  return resultArray.find(R.identity);
}

let lastAlertedAt = 0;

/**
 * Generic wrapper that makes a request to and API endpoint and handles errors with the
 * request including non-success response codes and connection errors.  Handles automatically
 * re-requesting the endpoints with timeouts in between.
 *
 * @param {string} endpoint string appended to the API base path to create the final URL.
 */
async function apiCall(apiFunction, args, retries = 0) {
  try {
    const res = await apiFunction(...args);

    if (res.status === 200 || res.status === 404) {
      return res.json();
    } else if (res.status === 429) {
      const now = new Date().getTime();
      if (now - lastAlertedAt > 1000) {
        lastAlertedAt = now;
        alert(
          'Too many requests from this IP; please limit your access rate to one page per 2 seconds.  Wait a minute and refresh the page before continuing to use the site.'
        );
      }
    } else if (res.status >= 500) {
      console.warn(`Got code ${res.status} from the API`);
      throw res.status;
    }
  } catch (err) {
    if (retries < retryCount) {
      console.warn(`API request failed; retrying #${retries + 1} after ${retryTimeoutMs}ms...`);
      await delay(retryTimeoutMs);
      return apiCall(apiFunction, args, retries + 1);
    } else {
      console.error('API request failed and max retries reached!');
    }
  }
}

function* fetchQuote({ symbol }) {
  if (yield canSkip(getQuote(symbol), symbolNotFound(symbol))) {
    return;
  }

  const quote = yield apiCall(Api.fetchQuote, [symbol]);

  if (quote.error) {
    yield put(apiActions.symbolNotFound(symbol));
  }

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
  const existingBottomSymbols = yield select(getBottomSymbols(limit, startIndex));
  if (existingBottomSymbols.length === limit) {
    return;
  }

  const bottomSymbols = yield apiCall(Api.fetchBottomSymbols, [limit, startIndex]);
  yield put({
    type: apiActions.BOTTOM_SYMBOLS_FETCHED,
    limit,
    startIndex,
    payload: bottomSymbols,
  });

  cb && cb();
}

function* fetchPopularityHistory({ symbol }) {
  if (yield canSkip(getPopularityHistory(symbol), symbolNotFound(symbol))) {
    return;
  }

  const res = yield apiCall(Api.fetchPopularityHistory, [symbol]);

  if (res.error) {
    yield put(apiActions.symbolNotFound(symbol));
    return;
  }

  yield put({
    type: apiActions.POPULARITY_HISTORY_FETCHED,
    symbol,
    payload: res,
  });
}

function* fetchQuoteHistory({ symbol }) {
  if (yield canSkip(getQuoteHistory(symbol), symbolNotFound(symbol))) {
    return;
  }

  const res = yield apiCall(Api.fetchQuoteHistory, [symbol]);

  if (res.error) {
    yield put(apiActions.symbolNotFound(symbol));
    return;
  }

  yield put({
    type: apiActions.QUOTE_HISTORY_FETCHED,
    symbol,
    payload: res,
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
  if (yield canSkip(getPopularityRanking(symbol), symbolNotFound(symbol))) {
    return;
  }

  const res = yield apiCall(Api.fetchSymbolPopularityRanking, [symbol]);

  if (res.error) {
    yield put(apiActions.symbolNotFound(symbol));
    return;
  }

  yield put({
    type: apiActions.POPULARITY_RANKING_FETCHED,
    symbol,
    popularityRanking: res.ranking,
  });
}

function* fetchNeighborRankingSymbols({ middleRanking }) {
  const existingNeighborRankings = yield select(getNeighborRankings(middleRanking));
  const expectedLength = middleRanking === 1 ? 2 : 3;
  if (existingNeighborRankings.length === expectedLength && !!existingNeighborRankings[0]) {
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
  const [previousSymbol, curSymbol, nextSymbol] = apiRes.length === 2 ? [null, ...apiRes] : apiRes;

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
  if (yield canSkip(getTotalSymbols)) {
    return;
  }

  const { total_symbols: totalSymbols } = yield apiCall(Api.fetchSymbolCount, [hoursAgo]);
  yield put({ type: apiActions.TOTAL_SYMBOLS_FETCHED, totalSymbols });
}

function* addQueryParam({ newParams, defaults }) {
  const existingParams = yield select(getQueryParams);
  const mergedParams = R.merge(existingParams, newParams);
  // Remove query params that are default if defaults are provided
  const nonDefaultParams = defaults ? R.pickBy((val, key) => defaults[key] !== val, mergedParams) : mergedParams;

  yield put(push({ search: queryString.stringify(nonDefaultParams) }));
}

function* rootSaga() {
  yield takeLatest(apiActions.FETCH_QUOTE_REQUESTED, fetchQuote);
  yield takeEvery(apiActions.FETCH_TOP_SYMBOLS_REQUESTED, fetchTopSymbols);
  yield takeEvery(apiActions.FETCH_BOTTOM_SYMBOLS_REQUESTED, fetchBottomSymbols);
  yield takeLatest(apiActions.FETCH_POPULARITY_HISTORY_REQUESTED, fetchPopularityHistory);
  yield takeLatest(apiActions.FETCH_QUOTE_HISTORY_REQUESTED, fetchQuoteHistory);
  yield takeEvery(apiActions.FETCH_LARGEST_POPULARITY_CHANGES_REQUESTED, fetchLargestPopularityChanges);
  yield takeEvery(apiActions.FETCH_POPULARITY_RANKING, fetchPopularityRanking);
  yield takeEvery(apiActions.FETCH_NEIGHBOR_RANKING_SYMBOLS, fetchNeighborRankingSymbols);
  yield takeLatest(apiActions.FETCH_TOTAL_SYMBOLS, fetchTotalSymbols);
  yield takeEvery(routerActions.ADD_QUERY_PARAMS, addQueryParam);
}

export default rootSaga;
