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

export const getDefaultConfig = () => ({
  changeType: CHANGE_TYPE.CHANGES,
  relative: 'true',
  // Defaults to 7-day view if viewed on a weekend, 1 day view otherwise
  hoursAgo: [6, 7].includes(new Date().getDay()) ? 24 * 7 : 24,
  minPopularity: 50,
});

const createQueryParamAdder = key => value =>
  addQueryParam({ [key]: value }, getDefaultConfig());

export const setPopularityChangesChangeType = createQueryParamAdder(
  'changeType'
);

export const setPopularityChangesRelative = createQueryParamAdder('relative');

export const setPopularityChangesHoursAgo = createQueryParamAdder('hoursAgo');

export const setPopularityChangesMinPopularity = createQueryParamAdder(
  'minPopularity'
);

export const setSelectedSymbol = createQueryParamAdder('symbol');
