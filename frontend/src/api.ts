/**
 * Defines an interface to the backend.
 */

const apiPrefix = process.env.REACT_APP_API_PREFIX || '';

const apiBaseCaller = <T>(mapArgsToUrlSuffix: (...args: T[]) => string) => (...args: T[]) =>
  fetch(`${apiPrefix}/${mapArgsToUrlSuffix(...args)}`);

export const fetchQuote = apiBaseCaller(symbol => `stocks/${symbol}/quote`);

export const fetchTopSymbols = apiBaseCaller(
  (limit = 25, startIndex = 0) => `most_popular?limit=${limit}&start_index=${startIndex}`
);

export const fetchBottomSymbols = apiBaseCaller(
  (limit = 25, startIndex = 0) => `least_popular?limit=${limit}&start_index=${startIndex}`
);

export const fetchPopularityHistory = apiBaseCaller(symbol => `stocks/${symbol}/popularity_history?daily_datapoints=1`);

export const fetchQuoteHistory = apiBaseCaller(symbol => `stocks/${symbol}/quote_history?daily_datapoints=1`);

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

export const fetchSymbolPopularityRanking = apiBaseCaller(symbol => `stocks/${symbol}/popularity_ranking`);

export const fetchLastNextPopularities = (popularityRanking: number) => {
  const first = popularityRanking === 1;
  const limit = first ? 2 : 3;
  const startIndex = first ? 0 : popularityRanking - 2;

  return fetchTopSymbols(limit, startIndex);
};

export const fetchSymbolCount = apiBaseCaller((hoursAgo = 2) => `total_symbols?hours_ago=${hoursAgo}`);

export const buildCSVDownloadURL = (symbol: string) => `${apiPrefix}/stocks/${symbol}/popularity_history_csv`;

const fetchBarometerTimeseriesInner = apiBaseCaller(() => 'barometer/timeseries');

export const fetchBarometerTimeseries = (): Promise<{ day_id: string; abs_pop_diff_sum: number }[]> =>
  fetchBarometerTimeseriesInner().then(res => res.json());
