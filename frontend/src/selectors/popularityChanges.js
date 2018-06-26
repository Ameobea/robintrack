import * as R from 'ramda';

import { getDefaultConfig } from 'src/actions/popularityChanges';
import { getQueryParams } from 'src/selectors/router';

export const getPopularityChangesConfig = state => {
  const mergedConfig = R.merge(getDefaultConfig(), getQueryParams(state));
  return { ...mergedConfig, suffix: mergedConfig.changeType };
};
