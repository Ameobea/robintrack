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

export const getPopularityChanges = ({
  suffix,
  relative,
  hoursAgo,
  minPopularity,
}) =>
  R.path([
    'api',
    'largestPopularityChanges',
    suffix,
    hoursAgo,
    relative,
    minPopularity,
  ]);
