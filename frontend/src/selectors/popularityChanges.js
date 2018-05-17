import * as R from 'ramda';

import { defaultConfig } from 'src/actions/popularityChanges';
import { getQueryParams } from 'src/selectors/router';

export const getPopularityChangesConfig = state => {
  const mergedConfig = R.merge(defaultConfig, getQueryParams(state));
  return { ...mergedConfig, suffix: mergedConfig.changeType };
};
