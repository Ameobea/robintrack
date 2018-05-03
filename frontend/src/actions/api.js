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

export const requestQuote = symbol => ({ type: FETCH_QUOTE_REQUESTED, symbol });
export const requestTopSymbols = () => ({ type: FETCH_TOP_SYMBOLS_REQUESTED });
export const requestBottomSymbols = () => ({
  type: FETCH_BOTTOM_SYMBOLS_REQUESTED,
});
export const requestPopularityHistory = symbol => ({
  type: FETCH_POPULARITY_HISTORY_REQUESTED,
  symbol,
});
export const requestQuoteHistory = symbol => ({
  type: FETCH_QUOTE_HISTORY_REQUESTED,
  symbol,
});
