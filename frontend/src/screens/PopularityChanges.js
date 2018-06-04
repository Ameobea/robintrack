import React from 'react';
import { connect } from 'react-redux';
import { Switch } from '@blueprintjs/core';
import { Column } from 'react-virtualized';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import numeral from 'numeral';
import { Card, Label, NumericInput } from '@blueprintjs/core';

import SymbolTable, { SymbolColumn } from 'src/components/SymbolTable';
import {
  requestLargestPopularityChanges,
  requestPopularityHistory,
  requestQuoteHistory,
  requestTotalSymbols,
} from 'src/actions/api';
import {
  setPopularityChangesChangeType,
  setPopularityChangesRelative,
  setSelectedSymbol,
  setPopularityChangesHoursAgo,
  setPopularityChangesMinPopularity,
} from 'src/actions/popularityChanges';
import { getPopularityChanges } from 'src/selectors/api';
import Loading from 'src/components/Loading';
import PopularityChart from 'src/components/PopularityChart';
import { fontColor } from 'src/style';
import { CHANGE_TYPE, RELATIVITY } from 'src/actions/popularityChanges';
import { getPopularityChangesConfig } from 'src/selectors/popularityChanges';

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
    minWidth: '50vw',
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
  placeholder: {
    fontSize: 24,
    color: fontColor,
    textAlign: 'center',
  },
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

const mapLabelsToOptions = labels =>
  Object.entries(labels).map(([changeType, label], i) => (
    <option key={i} value={changeType}>
      {label}
    </option>
  ));

const PopularityChangesConfig = connect(undefined, {
  setSelectedSymbol,
  setPopularityChangesRelative,
  setPopularityChangesHoursAgo,
  setPopularityChangesMinPopularity,
  setPopularityChangesChangeType,
})(
  ({
    config: { relative, hoursAgo, minPopularity, changeType },
    setPopularityChangesRelative,
    setSelectedSymbol,
    setPopularityChangesHoursAgo,
    setPopularityChangesMinPopularity,
    setPopularityChangesChangeType,
  }) => {
    const isRelative = relative === RELATIVITY.RELATIVE;

    return (
      <Card style={styles.config}>
        <Setting label="Relative" flex={0.5}>
          <div style={{ paddingTop: 8 }}>
            <Switch
              large
              checked={isRelative}
              onChange={() =>
                setPopularityChangesRelative(
                  isRelative ? RELATIVITY.NOT_RELATIVE : RELATIVITY.RELATIVE
                )
              }
            />
          </div>
        </Setting>
        <Setting label="Lookback Period">
          <div className="pt-select">
            <select
              value={hoursAgo}
              onChange={e =>
                setPopularityChangesHoursAgo(parseInt(e.target.value, 10))
              }
            >
              {mapLabelsToOptions(lookbackOptionLabels)}
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
              {mapLabelsToOptions(changeTypeOptionLabels)}
            </select>
          </div>
        </Setting>
      </Card>
    );
  }
);

const fetchSymbolData = (
  symbol,
  { requestPopularityHistory, requestQuoteHistory }
) => {
  requestPopularityHistory(symbol);
  requestQuoteHistory(symbol);
};

export const fetchPopularityChangesData = ({
  config,
  requestLargestPopularityChanges,
}) =>
  requestLargestPopularityChanges({
    ...config,
    startIndex: config.startIndex || 0,
  });

const fetchAllData = (
  { requestTotalSymbols, totalSymbols, selectedSymbol, ...props },
  cb
) => {
  fetchPopularityChangesData(props);

  R.isNil(totalSymbols) && requestTotalSymbols();

  if (selectedSymbol) {
    fetchSymbolData(selectedSymbol, props);
  }
};

const popularityChangesSettingsDiffer = (oldProps, newProps) =>
  !R.equals(oldProps.config, newProps.config);

const defaultColumnProps = {
  width: 150,
  flexGrow: 1,
  style: styles.text,
  cellRenderer: ({ cellData }) => numeral(cellData).format('0,0'),
};

class PopularityChanges extends React.Component {
  componentDidMount = () => {
    fetchAllData(this.props);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.selectedSymbol !== this.props.selectedSymbol) {
      fetchSymbolData(this.props.selectedSymbol, this.props);
    }

    if (popularityChangesSettingsDiffer(prevProps, this.props)) {
      this.props.requestLargestPopularityChanges({
        ...this.props.config,
        startIndex: this.props.config.startIndex || 0,
      });
    }
  };

  loadMoreData = ({ startIndex, stopIndex }) =>
    new Promise((fulfill, reject) =>
      fetchPopularityChangesData(
        R.mergeDeepLeft(
          { config: { startIndex, limit: stopIndex - startIndex } },
          this.props
        ),
        fulfill
      )
    );

  getColumns = () => {
    const isRelative = this.props.config.relative === RELATIVITY.RELATIVE;

    return [
      <Column
        {...defaultColumnProps}
        key={0}
        label="#"
        dataKey="i"
        width={100}
        flexGrow={0.5}
      />,
      SymbolColumn,
      <Column
        {...defaultColumnProps}
        key={2}
        label={isRelative ? 'Change %' : 'Change'}
        dataKey="popularity_difference"
        cellRenderer={({ cellData }) => (
          <span
            style={{
              ...styles.text,
              color: cellData > 0 ? '#43b249' : '#b24343',
            }}
          >
            {isRelative
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
        key={4}
        label="End"
        dataKey="end_popularity"
      />,
    ];
  };

  renderPopularityChart = () => {
    const { selectedSymbol, popularityHistory, quoteHistory } = this.props;
    if (!selectedSymbol) {
      return (
        <div style={styles.placeholder}>
          Click a row from the tables to view a chart.
        </div>
      );
    }

    return (
      <div>
        <center>
          <h1>
            <Link to={`/symbol/${selectedSymbol}`}>{selectedSymbol}</Link>
          </h1>
        </center>

        <PopularityChart
          symbol={selectedSymbol}
          popularityHistory={popularityHistory[selectedSymbol]}
          quoteHistory={quoteHistory[selectedSymbol]}
        />
      </div>
    );
  };

  handleRowClick = ({ symbol }) => this.props.setSelectedSymbol(symbol);

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
        height="70vh"
      />
    );
  };

  render = () => (
    <div style={styles.root}>
      <div>
        <PopularityChangesConfig config={this.props.config} />
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
    ...getPopularityChangesConfig(state),
    limit: pageSize,
  };
  const dataSelector = getPopularityChanges(config);
  const data = dataSelector(state);

  return {
    config,
    selectedSymbol: config.symbol,
    data: data ? data.map((datum, i) => ({ ...datum, i: i + 1 })) : null,
    ...R.pick(
      [
        'largestPopularityChanges',
        'popularityHistory',
        'quoteHistory',
        'totalSymbols',
      ],
      state.api
    ),
  };
};

export default connect(mapStateToProps, {
  requestLargestPopularityChanges,
  setPopularityChangesChangeType,
  setPopularityChangesRelative,
  setSelectedSymbol,
  requestPopularityHistory,
  requestQuoteHistory,
  requestTotalSymbols,
})(PopularityChanges);
