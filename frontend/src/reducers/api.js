import * as R from 'ramda';

import {
  QUOTE_FETCHED,
  TOP_SYMBOLS_FETCHED,
  BOTTOM_SYMBOLS_FETCHED,
  POPULARITY_HISTORY_FETCHED,
  QUOTE_HISTORY_FETCHED,
} from 'src/actions/api';

const getInitialState = () => ({
  quotes: {},
  popularityHistory: {},
  quoteHistory: {},
});

export default (state = getInitialState(), action = {}) => {
  switch (action.type) {
    case QUOTE_FETCHED: {
      return R.set(
        R.lensPath(['quotes', action.symbol]),
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

    case POPULARITY_HISTORY_FETCHED: {
      return R.set(
        R.lensPath(['popularityHistory', action.symbol]),
        action.payload,
        state
      );
    }

    case QUOTE_HISTORY_FETCHED: {
      return R.set(
        R.lensPath(['quoteHistory', action.symbol]),
        action.payload,
        state
      );
    }

    default: {
      return state;
    }
  }
};
