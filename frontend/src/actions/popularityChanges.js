import { addQueryParam } from 'src/actions/router';

export const CHANGE_TYPE = {
  INCREASES: 'increases',
  DECREASES: 'decreases',
  CHANGES: 'changes',
};

export const RELATIVITY = {
  RELATIVE: 'true',
  NOT_RELATIVE: 'false',
};

export const defaultConfig = {
  changeType: CHANGE_TYPE.CHANGES,
  relative: 'true',
  hoursAgo: 24,
  minPopularity: 50,
};

const createQueryParamAdder = key => value =>
  addQueryParam({ [key]: value }, defaultConfig);

export const setPopularityChangesChangeType = createQueryParamAdder(
  'changeType'
);

export const setPopularityChangesRelative = createQueryParamAdder('relative');

export const setPopularityChangesHoursAgo = createQueryParamAdder('hoursAgo');

export const setPopularityChangesMinPopularity = createQueryParamAdder(
  'minPopularity'
);

export const setSelectedSymbol = createQueryParamAdder('symbol');
