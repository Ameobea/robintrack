/**
 * Defines an interface to the backend.
 */

const apiPrefix = process.env.REACT_APP_API_PREFIX || '';

const apiBaseCaller = mapArgsToUrlSuffix => (...args) =>
  fetch(`${apiPrefix}/${mapArgsToUrlSuffix(...args)}`);

export const fetchQuote = apiBaseCaller(symbol => `stocks/${symbol}/quote`);

export const fetchTopSymbols = apiBaseCaller(
  (limit = 25, startIndex = 0) =>
    `most_popular?limit=${limit}&start_index=${startIndex}`
);

export const fetchBottomSymbols = apiBaseCaller(
  (limit = 25, startIndex = 0) =>
    `least_popular?limit=${limit}&start_index=${startIndex}`
);

export const fetchPopularityHistory = apiBaseCaller(
  symbol => `stocks/${symbol}/popularity_history`
);

export const fetchQuoteHistory = apiBaseCaller(
  symbol => `stocks/${symbol}/quote_history`
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
    const paramsString = params
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return `largest_popularity_${suffix}?${paramsString}`;
  }
);

export const fetchSymbolPopularityRanking = apiBaseCaller(
  symbol => `stocks/${symbol}/popularity_ranking`
);

export const fetchLastNextPopularities = popularityRanking => {
  const first = popularityRanking === 1;
  const limit = first ? 2 : 3;
  const startIndex = first ? 0 : popularityRanking - 2;

  return fetchTopSymbols(limit, startIndex);
};

export const fetchSymbolCount = apiBaseCaller(
  hoursAgo => `total_symbols?hours_ago=${hoursAgo || 2}`
);
