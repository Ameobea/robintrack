/**
 * Defines an interface to the backend.
 */

export const fetchQuote = symbol => {
  Promise.resolve({
    instrument_id: '890a6135-d05b-4ec1-97fc-39378ad391dd',
    symbol: 'ABCD',
    bid: 1.02,
    ask: 1.03,
  });
};

export const fetchTopSymbols = () =>
  Promise.resolve([
    { symbol: 'AAPL', popularity: 12312 },
    { symbol: 'GOOG', popularity: 11111 },
  ]);

export const fetchBottomSymbols = () =>
  Promise.resolve([
    { symbol: 'AAPL', popularity: 12312 },
    { symbol: 'GOOG', popularity: 11111 },
  ]);
