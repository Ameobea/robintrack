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

export const fetchPopularityChanges = ({
  limit,
  relative,
  hoursAgo,
  minPopularity,
  suffix,
  startIndex,
}) => {
  const params = [
    ['hours_ago', hoursAgo],
    ['limit', limit],
    ['percentage', relative],
    ['min_popularity', minPopularity],
    ['start_index', startIndex],
  ];
  const paramsString = params
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const url = `/largest_popularity_${suffix}?${paramsString}`;
  return fetch(url).then(res => res.json());
};
