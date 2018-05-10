import * as R from 'ramda';

const namedApiFetcher = key => symbol => ({ api }) => api[key][symbol];

export const getQuote = namedApiFetcher('quotes');

export const getPopularityHistory = namedApiFetcher('popularityHistory');

export const getQuoteHistory = namedApiFetcher('quoteHistory');

export const getBottomSymbols = (limit, startIndex) => ({
  api: { bottomSymbols },
}) => R.slice(startIndex, startIndex + limit, bottomSymbols);

export const getTopSymbols = (limit, startIndex) => ({ api: { topSymbols } }) =>
  R.slice(startIndex, startIndex + limit, topSymbols);

export const getPopularityChangesPath = ({
  suffix,
  relative,
  hoursAgo,
  minPopularity,
}) => [
  'largestPopularityChanges',
  suffix,
  hoursAgo.toString(),
  relative.toString(),
  minPopularity.toString(),
];

export const getPopularityChanges = config =>
  R.path(['api', ...getPopularityChangesPath(config)]);
