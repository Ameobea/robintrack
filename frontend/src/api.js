/**
 * Defines an interface to the backend.
 */

export const fetchQuote = symbol =>
  fetch(`/stocks/${symbol}/quote`).then(res => res.json());

export const fetchTopSymbols = () =>
  fetch('/most_popular').then(res => res.json());

export const fetchBottomSymbols = () =>
  fetch('/least_popular').then(res => res.json());

export const fetchPopularityHistory = symbol =>
  fetch(`/stocks/${symbol}/popularity_history`).then(res => res.json());

export const fetchQuoteHistory = symbol =>
  fetch(`/stocks/${symbol}/quote_history`).then(res => res.json());
