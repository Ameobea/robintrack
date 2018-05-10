import React from 'react';
import { connect } from 'react-redux';
import { Switch } from '@blueprintjs/core';
import { Column } from 'react-virtualized';
import * as R from 'ramda';
import numeral from 'numeral';

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
} from 'src/actions/popularityChanges';
import { getPopularityChanges } from 'src/selectors/api';
import Loading from 'src/components/Loading';
import PopularityChart from 'src/components/PopularityChart';
import { fontColor } from 'src/style';

const mapStateToPopularityChangesConfigProps = ({
  popularityChanges: { relative },
}) => ({ relative });

const styles = {
  text: { fontSize: 24 },
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chartWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    minWidth: '60vw',
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40,
  },
  config: { backgroundColor: '#444', width: 500 },
};

const PopularityChangesConfig = connect(
  mapStateToPopularityChangesConfigProps,
  { setSelectedSymbol, togglePopularityChangesRelative }
)(({ relative, togglePopularityChangesRelative, setSelectedSymbol }) => (
  <div style={styles.config}>
    <Switch
      large
      label="Relative"
      checked={relative}
      onChange={() => {
        togglePopularityChangesRelative();
        setSelectedSymbol(null);
      }}
    />
  </div>
));

const fetchNewData = ({ config, requestLargestPopularityChanges }) =>
  requestLargestPopularityChanges(config);

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
        cellRenderer={({ cellData }) =>
          relative ? numeral(cellData / 100).format('+0.00%') : cellData
        }
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
  const dataSelector = getPopularityChanges({
    ...state.popularityChanges,
    suffix: state.popularityChanges.changeType,
  });
  const data = dataSelector(state);

  return {
    config: { ...state.popularityChanges, limit: pageSize },
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
