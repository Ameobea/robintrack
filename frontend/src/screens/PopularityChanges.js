import React from 'react';
import { connect } from 'react-redux';
import { Switch } from '@blueprintjs/core';
import { Column } from 'react-virtualized';
import * as R from 'ramda';
import numeral from 'numeral';
import { Card, Label, NumericInput } from '@blueprintjs/core';

import SymbolTable, { SymbolColumn } from 'src/components/SymbolTable';
import {
  requestLargestPopularityChanges,
  requestPopularityHistory,
  requestQuoteHistory,
} from 'src/actions/api';
import {
  setPopularityChangesChangeType,
  togglePopularityChangesRelative,
  setSelectedSymbol,
  setPopularityChangesHoursAgo,
  setPopularityChangesMinPopularity,
} from 'src/actions/popularityChanges';
import { getPopularityChanges } from 'src/selectors/api';
import Loading from 'src/components/Loading';
import PopularityChart from 'src/components/PopularityChart';
import { fontColor } from 'src/style';
import { CHANGE_TYPE } from '../actions/popularityChanges';

const styles = {
  text: { fontSize: 24 },
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chartWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    minWidth: '45vw',
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40,
  },
  config: {
    backgroundColor: '#1f2939',
    minWidth: 600,
    maxWidth: 750,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 10,
  },
  setting: { display: 'flex', flex: 1 },
};

const Setting = ({ label, style = {}, flex = 1, children }) => (
  <div style={{ ...styles.setting, flex, ...style }}>
    <Label>
      {label}
      {children}
    </Label>
  </div>
);

const lookbackOptionLabels = {
  1: '1 Hour',
  4: '4 Hours',
  24: '1 Day',
  [24 * 3]: '3 Days',
  [24 * 7]: '1 Week',
  [30 * 7]: '1 Month',
};

const changeTypeOptionLabels = {
  [CHANGE_TYPE.CHANGES]: 'Changes',
  [CHANGE_TYPE.INCREASES]: 'Increases',
  [CHANGE_TYPE.DECREASES]: 'Decreases',
};

const PopularityChangesConfig = connect(
  ({ popularityChanges }) => ({ config: popularityChanges }),
  {
    setSelectedSymbol,
    togglePopularityChangesRelative,
    setPopularityChangesHoursAgo,
    setPopularityChangesMinPopularity,
    setPopularityChangesChangeType,
  }
)(
  ({
    config: { relative, hoursAgo, minPopularity, changeType },
    togglePopularityChangesRelative,
    setSelectedSymbol,
    setPopularityChangesHoursAgo,
    setPopularityChangesMinPopularity,
    setPopularityChangesChangeType,
  }) => (
    <Card style={styles.config}>
      <Setting label="Relative" flex={0.5}>
        <div style={{ paddingTop: 8 }}>
          <Switch
            large
            checked={relative}
            onChange={() => {
              togglePopularityChangesRelative();
              setSelectedSymbol(null);
            }}
          />
        </div>
      </Setting>
      <Setting label="Lookback Period">
        <div className="pt-select">
          <select
            value={hoursAgo}
            onChange={e =>
              setPopularityChangesHoursAgo(parseInt(e.target.value))
            }
          >
            {Object.entries(lookbackOptionLabels).map(([hours, label], i) => (
              <option key={i} value={hours}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </Setting>
      <Setting label="Minimum Popularity" flex={1.1}>
        <NumericInput
          size={8}
          buttonPosition="left"
          fill={false}
          min={0}
          width={50}
          minorStepSize={10}
          stepSize={25}
          majorStepSize={50}
          value={minPopularity}
          onValueChange={setPopularityChangesMinPopularity}
        />
      </Setting>
      <Setting label="Change Type">
        <div className="pt-select">
          <select
            value={changeType}
            onChange={e => setPopularityChangesChangeType(e.target.value)}
          >
            {Object.entries(changeTypeOptionLabels).map(
              ([changeType, label], i) => (
                <option key={i} value={changeType}>
                  {label}
                </option>
              )
            )}
          </select>
        </div>
      </Setting>
    </Card>
  )
);

const fetchNewData = ({ config, requestLargestPopularityChanges }) =>
  console.log(config) || requestLargestPopularityChanges(config);

const defaultColumnProps = {
  width: 150,
  flexGrow: 1,
  style: styles.text,
  cellRenderer: ({ cellData }) => numeral(cellData).format('0,0'),
};

class PopularityChanges extends React.Component {
  componentDidMount() {
    fetchNewData(this.props);
  }

  componentDidUpdate() {
    fetchNewData(this.props);
  }

  loadMoreData = ({ startIndex, stopIndex }) => Promise.resolve(null); // TODO

  getColumns = () => {
    const relative = this.props.config.relative;

    return [
      <Column
        {...defaultColumnProps}
        key={0}
        label="#"
        dataKey="i"
        width={75}
        flexGrow={0.5}
      />,
      SymbolColumn,
      <Column
        {...defaultColumnProps}
        key={2}
        label={relative ? 'Change %' : 'Change'}
        dataKey="popularity_difference"
        cellRenderer={({ cellData }) => (
          <span
            style={{
              ...styles.text,
              color: cellData > 0 ? '#43b249' : '#b24343',
            }}
          >
            {relative
              ? numeral(cellData / 100).format('+0.00%')
              : numeral(cellData).format('+0,0')}
          </span>
        )}
        flexGrow={1.2}
        width={200}
      />,
      <Column
        {...defaultColumnProps}
        key={3}
        label="Start"
        dataKey="start_popularity"
      />,
      <Column
        {...defaultColumnProps}
        key={3}
        label="End"
        dataKey="end_popularity"
      />,
    ];
  };
  renderPopularityChart = () => {
    const { selectedSymbol, popularityHistory, quoteHistory } = this.props;
    if (!selectedSymbol) {
      return (
        <div style={{ fontSize: 24, color: fontColor, textAlign: 'center' }}>
          Click a row from the tables to view a chart.
        </div>
      );
    }

    const popularityHistoryForSymbol = popularityHistory[selectedSymbol];
    const quoteHistoryForSymbol = quoteHistory[selectedSymbol];

    if (!popularityHistoryForSymbol || !quoteHistoryForSymbol) {
      return <Loading />;
    }

    return (
      <PopularityChart
        symbol={selectedSymbol}
        popularityHistory={popularityHistoryForSymbol}
        quoteHistory={quoteHistoryForSymbol}
      />
    );
  };

  handleRowClick = ({ symbol }) => {
    const {
      setSelectedSymbol,
      requestPopularityHistory,
      requestQuoteHistory,
    } = this.props;
    setSelectedSymbol(symbol);
    requestPopularityHistory(symbol);
    requestQuoteHistory(symbol);
  };

  renderSymbolTable = () => {
    const { data } = this.props;
    if (!data) {
      return <Loading />;
    }

    return (
      <SymbolTable
        label="Popularity Changes"
        columns={this.getColumns()}
        data={data}
        loadMoreData={this.loadMoreData}
        rowGetter={({ index }) => data[index]}
        onRowClick={this.handleRowClick}
        style={{ minWidth: 600, maxWidth: 750 }}
        disableHeader={false}
      />
    );
  };

  render = () => (
    <div style={styles.root}>
      <div>
        <PopularityChangesConfig />
        {this.renderSymbolTable()}
      </div>

      <div style={styles.chartWrapper}>
        <div style={{ width: '100%' }}>{this.renderPopularityChart()}</div>
      </div>
    </div>
  );
}

PopularityChanges.defaultProps = {
  pageSize: 50,
};

const mapStateToProps = (state, { pageSize = 50 }) => {
  const config = {
    ...state.popularityChanges,
    suffix: state.popularityChanges.changeType,
    limit: pageSize,
  };
  const dataSelector = getPopularityChanges(config);
  const data = dataSelector(state);

  return {
    config,
    selectedSymbol: state.popularityChanges.selectedSymbol,
    data: data ? data.map((datum, i) => ({ ...datum, i: i + 1 })) : null,
    ...R.pick(
      ['largestPopularityChanges', 'popularityHistory', 'quoteHistory'],
      state.api
    ),
  };
};

export default connect(mapStateToProps, {
  requestLargestPopularityChanges,
  setPopularityChangesChangeType,
  togglePopularityChangesRelative,
  setSelectedSymbol,
  requestPopularityHistory,
  requestQuoteHistory,
})(PopularityChanges);
