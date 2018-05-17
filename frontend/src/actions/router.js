export const ADD_QUERY_PARAMS = 'ADD_QUERY_PARAM';

export const addQueryParam = (newParams, defaults) => ({
  type: ADD_QUERY_PARAMS,
  newParams,
  defaults,
});
