import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Column } from 'react-virtualized';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import numeral from 'numeral';
import queryString from 'query-string';
import { Switch } from '@blueprintjs/core';

import {
  requestBottomSymbols,
  requestTopSymbols,
  requestPopularityHistory,
  requestQuoteHistory,
  requestTotalSymbols,
} from 'src/actions/api';
import { fontColor, backgroundColor } from 'src/style';
import Loading from 'src/components/Loading';
import PopularityChart from 'src/components/PopularityChart';
import SymbolTable, { SymbolColumn } from 'src/components/SymbolTable';
import { ResponsiveStyler } from 'src/components/ResponsiveHelpers';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 50,
    backgroundColor,
    justifyContent: 'center',
  },
  tablesWrapper: {
    display: 'flex',
    flex: 1.4,
    flexDirection: 'column',
    maxWidth: 400,
    minWidth: 300,
    justifyContent: 'space-around',
  },
  text: { fontSize: 24 },
  chartWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    minWidth: '50vw',
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40,
  },
  mobileChartWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    minWidth: '50vw',
  },
  placeholder: {
    fontSize: 24,
    color: fontColor,
    textAlign: 'center',
  },
  configWrapper: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
  },
};

class Leaderboard extends Component {
  state = {};

  componentDidMount = () => {
    const {
      initialPageSize,
      requestBottomSymbols,
      requestTopSymbols,
      bottomSymbols,
      topSymbols,
      requestTotalSymbols,
    } = this.props;

    if (R.isEmpty(bottomSymbols)) {
      requestBottomSymbols(initialPageSize, 0);
    }

    if (R.isEmpty(topSymbols)) {
      requestTopSymbols(initialPageSize, 0);
    }

    requestTotalSymbols();
  };

  fetchMoreTopSymbols = ({ startIndex, stopIndex }) =>
    new Promise((f, r) =>
      this.props.requestTopSymbols(stopIndex - startIndex, startIndex, f)
    );

  fetchMoreBottomSymbols = ({ startIndex, stopIndex }) =>
    new Promise((f, r) =>
      this.props.requestBottomSymbols(stopIndex - startIndex, startIndex, f)
    );

  updateSymbolChart = ({ symbol }) => {
    this.setState({ symbol });
    this.props.requestPopularityHistory(symbol);
    this.props.requestQuoteHistory(symbol);
  };

  renderSymbolChart = () => {
    const symbol = this.state.symbol;
    const popularityHistoryForSymbol = this.props.popularityHistory[symbol];
    const quoteHistoryForSymbol = this.props.quoteHistory[symbol];

    if (!symbol) {
      return (
        <div style={styles.placeholder}>
          Click a row from the table to view a chart.
        </div>
      );
    }

    return (
      <div>
        <center>
          <h1>
            <Link to={`/symbol/${symbol}`}>{symbol}</Link>
          </h1>
        </center>

        <PopularityChart
          symbol={symbol}
          popularityHistory={popularityHistoryForSymbol}
          quoteHistory={quoteHistoryForSymbol}
          style={{ height: '68vh' }}
        />
      </div>
    );
  };

  getColumns = () => [
    <Column
      key={1}
      label="#"
      dataKey="i"
      width={100}
      flexGrow={0.5}
      style={styles.text}
    />,
    SymbolColumn,
    <Column
      key={3}
      label="Popularity"
      dataKey="popularity"
      width={150}
      flexGrow={1}
      style={styles.text}
    />,
  ];

  getRowGetter = data => ({ index }) => {
    const { popularity, symbol } = data[index];
    return {
      symbol,
      popularity: numeral(popularity).format('0,0'),
      i: index + 1,
    };
  };

  symbolChart = null;

  render = () => {
    const {
      topSymbols,
      bottomSymbols,
      location: { search = '' },
      push,
    } = this.props;

    if (!bottomSymbols || !topSymbols) {
      return <Loading />;
    }

    const { show = 'top' } = queryString.parse(search);

    const symbolTablePropMap = {
      top: {
        label: 'Most Popular',
        data: topSymbols,
        loadMoreData: this.fetchMoreTopSymbols,
        rowGetter: this.getRowGetter(topSymbols),
      },
      bottom: {
        label: 'Least Popular',
        data: bottomSymbols,
        loadMoreData: this.fetchMoreBottomSymbols,
        rowGetter: this.getRowGetter(bottomSymbols),
      },
    };

    const symbolTableProps =
      symbolTablePropMap[show] || symbolTablePropMap['top'];

    return (
      <div style={styles.root}>
        <div style={styles.tablesWrapper}>
          <div style={styles.configWrapper}>
            Bottom
            <Switch
              checked={show !== 'bottom'}
              onChange={() =>
                push({
                  search: queryString.stringify({
                    show: show === 'top' ? 'bottom' : 'top',
                  }),
                })
              }
              style={{ marginLeft: 8 }}
              large
            />
            Top
          </div>

          <SymbolTable
            onRowClick={this.updateSymbolChart}
            columns={this.getColumns()}
            height="70vh"
            {...symbolTableProps}
          />
        </div>

        <ResponsiveStyler
          styler={matches =>
            matches ? styles.chartWrapper : styles.mobileChartWrapper
          }
          minDeviceWidth={600}
        >
          <div style={{ width: '100%' }}>{this.renderSymbolChart()}</div>
        </ResponsiveStyler>
      </div>
    );
  };
}

Leaderboard.defaultProps = {
  initialPageSize: 50,
};

const mapStateToProps = ({ api, router: { location } }) => ({
  ...R.pick(
    ['bottomSymbols', 'topSymbols', 'popularityHistory', 'quoteHistory'],
    api
  ),
  location,
});

export default connect(mapStateToProps, {
  requestBottomSymbols,
  requestTopSymbols,
  requestPopularityHistory,
  requestQuoteHistory,
  requestTotalSymbols,
  push,
})(Leaderboard);
