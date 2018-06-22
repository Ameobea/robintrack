import R from 'ramda';

export const getSelectedSymbols = R.path([
  'popularityComparison',
  'selectedSymbols',
]);
