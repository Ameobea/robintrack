export const SET_POPULARITY_CHANGES_CHANGE_TYPE =
  'SET_POPULARITY_CHANGES_CHANGE_TYPE';
export const TOGGLE_POPULARITY_CHANGES_RELATIVE =
  'TOGGLE_POPULARITY_CHANGES_RELATIVE';
export const SET_POPULARITY_CHANGES_HOURS_AGO =
  'SET_POPULARITY_CHANGES_HOURS_AGO';
export const SET_POPULARITY_CHANGES_MIN_POPULARITY =
  'SET_POPULARITY_CHANGES_MIN_POPULARITY';

export const setPopularityChangesChangeType = changeType => ({
  type: SET_POPULARITY_CHANGES_CHANGE_TYPE,
  changeType,
});

export const togglePopularityChangesRelative = () => ({
  type: TOGGLE_POPULARITY_CHANGES_RELATIVE,
});

export const setPopularityChangesHoursAgo = hours => ({
  type: SET_POPULARITY_CHANGES_HOURS_AGO,
  hours,
});

export const setPopularityChangesMinPopularity = minPopularity => ({
  type: SET_POPULARITY_CHANGES_MIN_POPULARITY,
  minPopularity,
});
