export const FETCH_QUOTE_REQUESTED = 'FETCH_QUOTE';
export const QUOTE_FETCHED = 'QUOTE_FETCHED';

export const FETCH_TOP_SYMBOLS_REQUESTED = 'FETCH_TOP_SYMBOLS_REQUESTED';
export const TOP_SYMBOLS_FETCHED = 'TOP_SYMBOLS_FETCHED';

export const FETCH_BOTTOM_SYMBOLS_REQUESTED = 'FETCH_BOTTOM_SYMBOLS_REQUESTED';
export const BOTTOM_SYMBOLS_FETCHED = 'BOTTOM_SYMBOLS_FETCHED';

export const fetchQuote = symbol => ({ type: FETCH_QUOTE_REQUESTED, symbol });
export const fetchTopSymbols = () => ({ type: FETCH_TOP_SYMBOLS_REQUESTED });
export const fetchBottomSymbols = () => ({
  type: FETCH_BOTTOM_SYMBOLS_REQUESTED,
});
