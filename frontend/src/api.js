/**
 * Defines an interface to the backend.
 */

const apiPrefix = process.env.REACT_APP_API_PREFIX || '';

const apiBaseCaller = mapArgsToUrlSuffix => args =>
  fetch(`${apiPrefix}/${mapArgsToUrlSuffix(args)}`);

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
