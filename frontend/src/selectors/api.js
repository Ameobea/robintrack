const namedApiFetcher = key => symbol => ({ api }) => api[key][symbol];

export const getQuote = namedApiFetcher('quotes');

export const getPopularityHistory = namedApiFetcher('popularityHistory');

export const getQuoteHistory = namedApiFetcher('quoteHistory');

export const getBottomSymbols = ({ api: { bottomSymbols } }) => bottomSymbols;

export const getTopSymbols = ({ api: { topSymbols } }) => topSymbols;
