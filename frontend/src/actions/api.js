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
  'FETCH_LARGEST_POPULARITY_CHANGES_REQUESTED';
export const LARGEST_POPULARITY_CHANGES_FETCHED =
  'LARGEST_POPULARITY_CHANGES_FETCHED';

export const FETCH_POPULARITY_RANKING = 'FETCH_POPULARITY_RANKING';
export const POPULARITY_RANKING_FETCHED = 'POPULARITY_RANKING_FETCHED';

export const FETCH_NEIGHBOR_RANKING_SYMBOLS = 'FETCH_NEIGHBOR_RANKING_SYMBOLS';
export const NEIGHBOR_RANKING_SYMBOLS_FETCHED =
  'NEIGHBOR_RANKING_SYMBOLS_FETCHED';

export const FETCH_TOTAL_SYMBOLS = 'FETCH_TOTAL_SYMBOLS';
export const TOTAL_SYMBOLS_FETCHED = 'TOTAL_SYMBOLS_FETCHED';

export const SYMBOL_NOT_FOUND = 'SYMBOL_NOT_FOUND';
export const symbolNotFound = symbol => ({ type: SYMBOL_NOT_FOUND, symbol });

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

export const requestLargestPopularityChanges = (config, cb) => ({
  type: FETCH_LARGEST_POPULARITY_CHANGES_REQUESTED,
  cb,
  ...config,
});

export const fetchPopularityRanking = symbol => ({
  type: FETCH_POPULARITY_RANKING,
  symbol,
});

export const fetchNeighborRankingSymbols = middleRanking => ({
  type: FETCH_NEIGHBOR_RANKING_SYMBOLS,
  middleRanking,
});

export const requestTotalSymbols = hoursAgo => ({
  type: FETCH_TOTAL_SYMBOLS,
  hoursAgo,
});
