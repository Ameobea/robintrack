export const FETCH_QUOTE_REQUESTED = 'FETCH_QUOTE';
export const QUOTE_FETCHED = 'QUOTE_FETCHED';

export const FETCH_TOP_SYMBOLS_REQUESTED = 'FETCH_TOP_SYMBOLS_REQUESTED';
export const TOP_SYMBOLS_FETCHED = 'TOP_SYMBOLS_FETCHED';

export const FETCH_BOTTOM_SYMBOLS_REQUESTED = 'FETCH_BOTTOM_SYMBOLS_REQUESTED';
export const BOTTOM_SYMBOLS_FETCHED = 'BOTTOM_SYMBOLS_FETCHED';

export const FETCH_POPULARITY_HISTORY_REQUESTED =
  'FETCH_POPULARITY_HISTORY_REQUESTED';
export const POPULARITY_HISTORY_FETCHED = 'POPULARITY_HISTORY_FETCHED';

export const FETCH_QUOTE_HISTORY_REQUESTED = 'FETCH_QUOTE_HISTORY_REQUESTED';
export const QUOTE_HISTORY_FETCHED = 'QUOTE_HISTORY_FETCHED';

export const FETCH_LARGEST_POPULARITY_CHANGES_REQUESTED =
  'FETCH_POPULARITY_CHANGES_REQUESTED';
export const LARGEST_POPULARITY_CHANGES_FETCHED = 'POPULARITY_CHANGES_FETCHED';
export const INCREASES = 'increases';
export const DECREASES = 'decreases';
export const CHANGES = 'changes';

export const requestQuote = symbol => ({ type: FETCH_QUOTE_REQUESTED, symbol });

export const requestTopSymbols = (limit, startIndex, cb) => ({
  type: FETCH_TOP_SYMBOLS_REQUESTED,
  limit,
  startIndex,
  cb,
});

export const requestBottomSymbols = (limit, startIndex, cb) => ({
  type: FETCH_BOTTOM_SYMBOLS_REQUESTED,
  limit,
  startIndex,
  cb,
});

export const requestPopularityHistory = symbol => ({
  type: FETCH_POPULARITY_HISTORY_REQUESTED,
  symbol,
});

export const requestQuoteHistory = symbol => ({
  type: FETCH_QUOTE_HISTORY_REQUESTED,
  symbol,
});

const largestPopularityChangesBase = suffix => (
  relative = false,
  minPopularity = 0
) => ({
  type: FETCH_LARGEST_POPULARITY_CHANGES_REQUESTED,
  suffix,
  relative,
  minPopularity,
});

export const requestLargestPopularityIncreases = largestPopularityChangesBase(
  INCREASES
);

export const requestLargestPopularityChanges = largestPopularityChangesBase(
  CHANGES
);

export const requestLargestPopularityDecreases = largestPopularityChangesBase(
  DECREASES
);
