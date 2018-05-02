import R from 'ramda';

import {
  QUOTE_FETCHED,
  TOP_SYMBOLS_FETCHED,
  BOTTOM_SYMBOLS_FETCHED,
} from 'src/actions/api';

const getInitialState = () => ({ quotes: {} });

export default (state = getInitialState(), action = {}) => {
  switch (action.type) {
    case QUOTE_FETCHED: {
      return R.set(
        R.lensPath(['quotes', action.quote.symbol]),
        R.omit(['symbol'], action.quote),
        state
      );
    }

    case TOP_SYMBOLS_FETCHED: {
      return R.set(R.lensProp('topSymbols'), action.payload, state);
    }

    case BOTTOM_SYMBOLS_FETCHED: {
      return R.set(R.lensProp('bottomSymbols'), action.payload, state);
    }

    default: {
      return state;
    }
  }
};
