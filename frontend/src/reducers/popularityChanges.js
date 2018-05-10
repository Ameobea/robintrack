import {
  SET_POPULARITY_CHANGES_CHANGE_TYPE,
  TOGGLE_POPULARITY_CHANGES_RELATIVE,
  SET_POPULARITY_CHANGES_HOURS_AGO,
  SET_POPULARITY_CHANGES_MIN_POPULARITY,
} from 'src/actions/popularityChanges';

const CHANGE_TYPE = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  CHANGE: 'CHANGE',
};

const getInitialState = () => ({
  changeType: CHANGE_TYPE.CHANGE,
  relative: true,
  hoursAgo: 24,
  minPopularity: 50,
});

export default (state = getInitialState(), action = {}) => {
  switch (action.type) {
    case SET_POPULARITY_CHANGES_CHANGE_TYPE: {
      return { ...state, changeType: action.changeType };
    }

    case TOGGLE_POPULARITY_CHANGES_RELATIVE: {
      return { ...state, relative: !state.relative };
    }

    case SET_POPULARITY_CHANGES_HOURS_AGO: {
      return { ...state, hoursAgo: action.hoursAgo };
    }

    case SET_POPULARITY_CHANGES_MIN_POPULARITY: {
      return { ...state, minPopularity: action.minPopularity };
    }

    default: {
      return state;
    }
  }
};
