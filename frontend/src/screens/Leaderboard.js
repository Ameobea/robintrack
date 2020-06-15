import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as R from 'ramda';
import { Column } from 'react-virtualized';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
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
import SymbolTable, { SymbolColumn } from 'src/components/SymbolTable';
import { withMobileProp } from 'src/components/ResponsiveHelpers';

const PopularityChart = React.lazy(() => import('src/components/PopularityChart'));

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
    paddingLeft: 40,
    paddingRight: 40,
  },
  mobileChartWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    minWidth: '50vw',
    paddingTop: 10,
  },
  placeholder: {
    fontSize: 24,
    color: fontColor,
    textAlign: 'center',
    paddingTop: 15,
  },
  configWrapper: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20,
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
    new Promise((f, r) => this.props.requestTopSymbols(stopIndex - startIndex, startIndex, f));

  fetchMoreBottomSymbols = ({ startIndex, stopIndex }) =>
    new Promise((f, r) => this.props.requestBottomSymbols(stopIndex - startIndex, startIndex, f));

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
      return <div style={styles.placeholder}>Click a row from the table to view a chart.</div>;
    }

    return (
      <div>
        <center>
          <h1>
            <Link to={`/symbol/${symbol}`}>{symbol}</Link>
          </h1>
        </center>

        <Suspense fallback={<Loading style={{ height: this.props.mobile ? '50vh' : '68vh' }} />}>
          <PopularityChart
            symbol={symbol}
            popularityHistory={popularityHistoryForSymbol}
            quoteHistory={quoteHistoryForSymbol}
            style={{ height: this.props.mobile ? '50vh' : '68vh' }}
          />
        </Suspense>
      </div>
    );
  };

  getColumns = () => [
    <Column key={1} label="#" dataKey="i" width={100} flexGrow={0.5} style={styles.text} />,
    SymbolColumn({ mobile: false }),
    <Column key={3} label="Popularity" dataKey="popularity" width={150} flexGrow={1} style={styles.text} />,
  ];

  getRowGetter = data => ({ index }) => {
    const { popularity, symbol, name } = data[index];

    return {
      symbol,
      popularity: numeral(popularity).format('0,0'),
      name,
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
        data: topSymbols,
        loadMoreData: this.fetchMoreTopSymbols,
        rowGetter: this.getRowGetter(topSymbols),
      },
      bottom: {
        data: bottomSymbols,
        loadMoreData: this.fetchMoreBottomSymbols,
        rowGetter: this.getRowGetter(bottomSymbols),
      },
    };

    const symbolTableProps = symbolTablePropMap[show] || symbolTablePropMap['top'];

    return (
      <div style={styles.root}>
        <div style={styles.tablesWrapper}>
          <div style={styles.configWrapper}>
            Least Popular
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
            Most Popular
          </div>

          <SymbolTable
            onRowClick={this.updateSymbolChart}
            columns={this.getColumns()}
            height="70vh"
            fullHeight
            selectedSymbol={this.state.symbol}
            minBatchSize={50}
            {...symbolTableProps}
          />

          <div style={{ textAlign: 'center', marginTop: 10 }}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`/api/${show === 'bottom' ? 'least_popular' : 'most_popular'}.csv?limit=100000`}
            >
              Download Full Leaderboard as CSV
            </a>
          </div>
        </div>

        <div style={this.props.mobile ? styles.mobileChartWrapper : styles.chartWrapper}>
          <div style={{ width: '100%' }}>{this.renderSymbolChart()}</div>
        </div>
      </div>
    );
  };
}

Leaderboard.defaultProps = {
  initialPageSize: 50,
};

const mapStateToProps = ({ api, router: { location } }) => ({
  ...R.pick(['bottomSymbols', 'topSymbols', 'popularityHistory', 'quoteHistory'], api),
  location,
});

export default compose(
  connect(mapStateToProps, {
    requestBottomSymbols,
    requestTopSymbols,
    requestPopularityHistory,
    requestQuoteHistory,
    requestTotalSymbols,
    push,
  }),
  withMobileProp({ maxDeviceWidth: 600 })
)(Leaderboard);
