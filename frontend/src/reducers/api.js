import * as R from 'ramda';

import {
  QUOTE_FETCHED,
  TOP_SYMBOLS_FETCHED,
  BOTTOM_SYMBOLS_FETCHED,
  POPULARITY_HISTORY_FETCHED,
  QUOTE_HISTORY_FETCHED,
  LARGEST_POPULARITY_CHANGES_FETCHED,
  POPULARITY_RANKING_FETCHED,
  NEIGHBOR_RANKING_SYMBOLS_FETCHED,
  TOTAL_SYMBOLS_FETCHED,
  SYMBOL_NOT_FOUND,
} from 'src/actions/api';
import { getPopularityChangesPath } from 'src/selectors/api';

const getInitialState = () => ({
  quotes: {},
  popularityHistory: {},
  quoteHistory: {},
  topSymbols: [],
  bottomSymbols: [],
  symbolPopularities: {},
  popularityMapping: [],
  notFound: new Set(),
});

export default (state = getInitialState(), action = {}) => {
  switch (action.type) {
    case QUOTE_FETCHED: {
      return R.set(R.lensPath(['quotes', action.symbol]), R.omit(['symbol'], action.quote), state);
    }

    case TOP_SYMBOLS_FETCHED: {
      const topSymbols = R.clone(state.topSymbols);
      action.payload.forEach((datum, i) => {
        topSymbols[action.startIndex + i] = datum;
      });

      return { ...state, topSymbols };
    }

    case BOTTOM_SYMBOLS_FETCHED: {
      const bottomSymbols = R.clone(state.bottomSymbols);
      action.payload.forEach((datum, i) => {
        bottomSymbols[action.startIndex + i] = datum;
      });

      return { ...state, bottomSymbols };
    }

    case POPULARITY_HISTORY_FETCHED: {
      return R.set(R.lensPath(['popularityHistory', action.symbol]), action.payload, state);
    }

    case QUOTE_HISTORY_FETCHED: {
      return R.set(R.lensPath(['quoteHistory', action.symbol]), action.payload, state);
    }

    case LARGEST_POPULARITY_CHANGES_FETCHED: {
      const { payload, startIndex, ...config } = action;
      const lens = R.lensPath(getPopularityChangesPath(config));
      const data = R.clone(R.view(lens, state)) || [];
      payload.forEach((datum, i) => {
        data[i + startIndex] = datum;
      });

      return R.set(lens, data, state);
    }

    case POPULARITY_RANKING_FETCHED: {
      return R.set(R.lensPath(['symbolPopularities', action.symbol]), action.popularityRanking, state);
    }

    case NEIGHBOR_RANKING_SYMBOLS_FETCHED: {
      const mapping = R.clone(state.popularityMapping);

      ['previousSymbol', 'curSymbol', 'nextSymbol'].forEach((key, i) => {
        const index = action.middleRanking + (i - 1);
        mapping[index] = action[key] || mapping[index];
      });

      return R.set(R.lensProp('popularityMapping'), mapping, state);
    }

    case TOTAL_SYMBOLS_FETCHED: {
      return { ...state, totalSymbols: action.totalSymbols };
    }

    case SYMBOL_NOT_FOUND: {
      return { ...state, notFound: state.notFound.add(action.symbol) };
    }

    default: {
      return state;
    }
  }
};
