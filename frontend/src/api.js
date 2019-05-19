/**
 * Defines an interface to the backend.
 */

import * as R from 'ramda';

const apiPrefix = process.env.REACT_APP_API_PREFIX || '';
const isMock = process.env.REACT_APP_MOCK_API;

const apiBaseCaller = (mapArgsToUrlSuffix, mapArgsToMockResponse) => (...args) =>
  isMock && mapArgsToMockResponse
    ? Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mapArgsToMockResponse(...args)),
      })
    : fetch(`${apiPrefix}/${mapArgsToUrlSuffix(...args)}`);

export const fetchQuote = apiBaseCaller(
  symbol => `stocks/${symbol}/quote`,
  () => ({ bid: 39.0, ask: 39.04, last_trade_price: 39.02 })
);

export const fetchTopSymbols = apiBaseCaller(
  (limit = 25, startIndex = 0) => `most_popular?limit=${limit}&start_index=${startIndex}`,
  (limit = 25, startIndex = 0) =>
    R.times(R.identity, limit)
      .map(i => i + startIndex)
      .map(i => ({ symbol: i.toString(), popularity: 10000 - i }))
);

export const fetchBottomSymbols = apiBaseCaller(
  (limit = 25, startIndex = 0) => `least_popular?limit=${limit}&start_index=${startIndex}`,
  (limit = 25, startIndex = 0) =>
    R.times(R.identity, limit)
      .map(i => i + startIndex)
      .map(i => ({ symbol: i.toString(), popularity: i }))
);

export const fetchPopularityHistory = apiBaseCaller(
  symbol => `stocks/${symbol}/popularity_history`,
  () =>
    R.times(R.identity, 200).map(i => {
      const timestamp = new Date();
      timestamp.setUTCHours(10000 + i);

      return { timestamp, popularity: i % Math.round(Math.random() * 6) };
    })
);

export const fetchQuoteHistory = apiBaseCaller(
  symbol => `stocks/${symbol}/quote_history`,
  () =>
    R.times(R.identity, 200).map(i => {
      const timestamp = new Date();
      timestamp.setUTCHours(10000 + i);
      const price = Math.round(Math.random() * 600) / 10;

      return {
        timestamp,
        bid: price - 0.01,
        ask: price + 0.01,
        last_trade_price: price,
      };
    })
);

export const fetchPopularityChanges = apiBaseCaller(
  ({ limit, relative, hoursAgo, minPopularity, suffix, startIndex }) => {
    const params = [
      ['hours_ago', hoursAgo],
      ['limit', limit],
      ['percentage', relative],
      ['min_popularity', minPopularity],
      ['start_index', startIndex],
    ];
    const paramsString = params.map(([key, value]) => `${key}=${value}`).join('&');

    return `largest_popularity_${suffix}?${paramsString}`;
  }
);

export const fetchSymbolPopularityRanking = apiBaseCaller(
  symbol => `stocks/${symbol}/popularity_ranking`,
  symbol => parseInt(symbol, 10)
);

export const fetchLastNextPopularities = popularityRanking => {
  const first = popularityRanking === 1;
  const limit = first ? 2 : 3;
  const startIndex = first ? 0 : popularityRanking - 2;

  return fetchTopSymbols(limit, startIndex);
};

export const fetchSymbolCount = apiBaseCaller(
  (hoursAgo = 2) => `total_symbols?hours_ago=${hoursAgo}`,
  () => ({ total_symbols: 10000 })
);

export const buildCSVDownloadURL = symbol => `${apiPrefix}/stocks/${symbol}/popularity_history_csv`;
