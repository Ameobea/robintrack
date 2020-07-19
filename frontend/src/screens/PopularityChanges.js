import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Switch } from '@blueprintjs/core';
import { Column } from 'react-virtualized';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import numeral from 'numeral';
import { Card, Label } from '@blueprintjs/core';

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
import { fontColor } from 'src/style';
import { CHANGE_TYPE, RELATIVITY } from 'src/actions/popularityChanges';
import { getPopularityChangesConfig } from 'src/selectors/popularityChanges';
import { withMobileProp } from 'src/components/ResponsiveHelpers';

const PopularityChart = React.lazy(() => import('src/components/PopularityChart'));

const getTextStyle = mobile => ({ fontSize: mobile ? 14 : 24 });

const styles = {
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
    paddingTop: 25,
    paddingLeft: 40,
    paddingRight: 40,
  },
  mobileChartWrapper: {
    display: 'flex',
    flex: 1,
    padding: 5,
    paddingTop: 20,
    justifyContent: 'center',
    maxWidth: '90vw',
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
  mobileConfig: {
    flex: 1,
    minWidth: '90vw',
    flexWrap: 'wrap',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 20,
    justifyContent: 'space-around',
  },
  setting: { display: 'flex', flex: 1 },
  mobileSetting: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-end',
    marginTop: -15,
  },
  placeholder: {
    fontSize: 24,
    color: fontColor,
    textAlign: 'center',
  },
};

const Setting = withMobileProp({ maxDeviceWidth: 600 })(({ label, style = {}, flex = 1, mobile, children }) => (
  <div
    style={{
      ...styles.setting,
      ...(mobile ? styles.mobileSetting : {}),
      flex,
      minWidth: mobile ? '40vw' : undefined,
      maxWidth: mobile ? '40vw' : undefined,
      ...style,
    }}
  >
    <Label>
      {label}
      {children}
    </Label>
  </div>
));

const lookbackOptionLabels = {
  1: '~1-2 Hours',
  4: '4 Hours',
  24: '24 Hours',
  [24 * 3]: '3 Days',
  [24 * 7]: '1 Week',
  [30 * 24]: '30 Days',
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
    mobile,
    setPopularityChangesRelative,
    setPopularityChangesHoursAgo,
    setPopularityChangesMinPopularity,
    setPopularityChangesChangeType,
  }) => {
    const isRelative = relative === RELATIVITY.RELATIVE;

    return (
      <Card style={R.merge(styles.config, mobile ? styles.mobileConfig : {})}>
        <Setting label="Relative" flex={0.5}>
          <div style={{ paddingTop: 8 }}>
            <Switch
              large={!mobile}
              checked={isRelative}
              onChange={() => setPopularityChangesRelative(isRelative ? RELATIVITY.NOT_RELATIVE : RELATIVITY.RELATIVE)}
            />
          </div>
        </Setting>
        <Setting label="Lookback Period">
          <div className="bp3-select">
            <select value={hoursAgo} onChange={e => setPopularityChangesHoursAgo(parseInt(e.target.value, 10))}>
              {mapLabelsToOptions(lookbackOptionLabels)}
            </select>
          </div>
        </Setting>
        <Setting label="Minimum Popularity" flex={1.1}>
          <div className="bp3-select">
            <select
              value={minPopularity}
              onChange={e => setPopularityChangesMinPopularity(parseInt(e.target.value, 10))}
            >
              {mapLabelsToOptions({ 1: '1', 10: '10', 50: '50', 100: '100', 500: '500', 1000: '1000', 10000: '10000' })}
            </select>
          </div>
        </Setting>
        <Setting label="Change Type">
          <div className="bp3-select">
            <select value={changeType} onChange={e => setPopularityChangesChangeType(e.target.value)}>
              {mapLabelsToOptions(changeTypeOptionLabels)}
            </select>
          </div>
        </Setting>
      </Card>
    );
  }
);

const fetchSymbolData = (symbol, { requestPopularityHistory, requestQuoteHistory }) => {
  requestPopularityHistory(symbol);
  requestQuoteHistory(symbol);
};

export const fetchPopularityChangesData = ({ config, requestLargestPopularityChanges }) =>
  requestLargestPopularityChanges({
    ...config,
    startIndex: config.startIndex || 0,
  });

const fetchAllData = ({ requestTotalSymbols, totalSymbols, selectedSymbol, ...props }, cb) => {
  fetchPopularityChangesData(props);

  R.isNil(totalSymbols) && requestTotalSymbols();

  if (selectedSymbol) {
    fetchSymbolData(selectedSymbol, props);
  }
};

const popularityChangesSettingsDiffer = (oldProps, newProps) => !R.equals(oldProps.config, newProps.config);

const getDefaultColumnProps = mobile => ({
  width: 150,
  flexGrow: 1,
  style: getTextStyle(mobile),
  cellRenderer: ({ cellData }) => numeral(cellData).format('0,0'),
});

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
    new Promise(fulfill =>
      fetchPopularityChangesData(
        R.mergeDeepLeft({ config: { startIndex, limit: stopIndex - startIndex } }, this.props),
        fulfill
      )
    );

  getColumns = () => {
    const { mobile } = this.props;
    const isRelative = this.props.config.relative === RELATIVITY.RELATIVE;
    const defaultColumnProps = getDefaultColumnProps(mobile);

    return [
      <Column {...defaultColumnProps} key={0} label="#" dataKey="i" width={100} flexGrow={0.5} />,
      SymbolColumn({ mobile: this.props.mobile }),
      <Column
        {...defaultColumnProps}
        key={2}
        label={isRelative ? 'Change %' : 'Change'}
        dataKey="popularity_difference"
        cellRenderer={({ cellData }) => (
          <span
            style={{
              ...getTextStyle(mobile),
              color: cellData > 0 ? '#43b249' : '#b24343',
            }}
          >
            {isRelative ? numeral(cellData / 100).format('+0.00%') : numeral(cellData).format('+0,0')}
          </span>
        )}
        flexGrow={1.2}
        width={200}
      />,
      <Column {...defaultColumnProps} key={3} label="Start" dataKey="start_popularity" />,
      <Column {...defaultColumnProps} key={4} label="End" dataKey="end_popularity" />,
    ];
  };

  renderPopularityChart = () => {
    const { selectedSymbol, popularityHistory, quoteHistory } = this.props;
    if (!selectedSymbol) {
      return <div style={styles.placeholder}>Click a row from the table to view a chart.</div>;
    }

    return (
      <div>
        <center>
          <h1>
            <Link to={`/symbol/${selectedSymbol}`}>{selectedSymbol}</Link>
          </h1>
        </center>

        <Suspense fallback={<Loading />}>
          <PopularityChart
            symbol={selectedSymbol}
            popularityHistory={popularityHistory[selectedSymbol]}
            quoteHistory={quoteHistory[selectedSymbol]}
          />
        </Suspense>
      </div>
    );
  };

  handleRowClick = ({ symbol }) => this.props.setSelectedSymbol(symbol);

  renderSymbolTable = () => {
    const { data, selectedSymbol } = this.props;
    if (!data) {
      return <Loading />;
    }

    return (
      <SymbolTable
        columns={this.getColumns()}
        data={data}
        loadMoreData={this.loadMoreData}
        rowGetter={({ index }) => data[index]}
        onRowClick={this.handleRowClick}
        style={{ minWidth: this.props.mobile ? 200 : 600, maxWidth: 750 }}
        disableHeader={false}
        height={this.props.mobile ? '50vh' : '70vh'}
        selectedSymbol={selectedSymbol}
      />
    );
  };

  render = () => (
    <>
      <div style={{ marginTop: 18, marginBottom: 34 }}>
        <p style={{ fontSize: this.props.mobile ? 14 : 18 }}>
          This page shows the stocks that have the largest changes in popularity according to the critera picked below.
          All displayed numbers are in terms of Robinhood accounts holding shares of each asset.{' '}
        </p>
        <p>
          Robinhood doesn&apos;t support shorting, so these represent long positions. However, fractional shares do
          count.
        </p>
      </div>

      <div style={styles.root}>
        <div>
          <PopularityChangesConfig config={this.props.config} mobile={this.props.mobile} />
          {this.renderSymbolTable()}
        </div>

        <div style={this.props.mobile ? styles.mobileChartWrapper : styles.chartWrapper}>
          <div style={{ width: '100%', height: '100%' }}>{this.renderPopularityChart()}</div>
        </div>
      </div>
    </>
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
    ...R.pick(['largestPopularityChanges', 'popularityHistory', 'quoteHistory', 'totalSymbols'], state.api),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestLargestPopularityChanges,
    setPopularityChangesChangeType,
    setPopularityChangesRelative,
    setSelectedSymbol,
    requestPopularityHistory,
    requestQuoteHistory,
    requestTotalSymbols,
  }),
  withMobileProp({ maxDeviceWidth: 600 })
)(PopularityChanges);
