/**
 * Defines an interface to the backend.
 */

export const fetchQuote = symbol =>
  fetch(`/stocks/${symbol}/quote`).then(res => res.json());

export const fetchTopSymbols = (limit = 25, startIndex = 0) => {
  const url = `/most_popular?limit=${limit}&start_index=${startIndex}`;
  return fetch(url).then(res => res.json());
};

export const fetchBottomSymbols = (limit = 25, startIndex = 0) => {
  const url = `/least_popular?limit=${limit}&start_index=${startIndex}`;
  return fetch(url).then(res => res.json());
};

export const fetchPopularityHistory = symbol =>
  fetch(`/stocks/${symbol}/popularity_history`).then(res => res.json());

export const fetchQuoteHistory = symbol =>
  fetch(`/stocks/${symbol}/quote_history`).then(res => res.json());

const popularityChangesBase = suffix => ({
  limit,
  relative,
  hoursAgo,
  minPopularity,
}) => {
  const url = `/largest_popularity_${suffix}?hours_ago=${hoursAgo}&limit=${limit}&percentage=${relative}&min_popularity=${minPopularity}`;
  return fetch(url).then(res => res.json());
};

export const fetchLargestPopularityChanges = popularityChangesBase('changes');

export const fetchLargestPopularityIncreases = popularityChangesBase(
  'increases'
);

export const fetchLargestPopularityDecreases = popularityChangesBase(
  'decreases'
);
