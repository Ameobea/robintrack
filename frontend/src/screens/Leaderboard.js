import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Column } from 'react-virtualized';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import {
  requestBottomSymbols,
  requestTopSymbols,
  requestPopularityHistory,
  requestQuoteHistory,
} from 'src/actions/api';
import { fontColor, backgroundColor } from 'src/style';
import Loading from 'src/components/Loading';
import PopularityChart from 'src/components/PopularityChart';
import SymbolTable, { SymbolColumn } from 'src/components/SymbolTable';

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
    flexDirection: 'row',
    maxWidth: 700,
    minWidth: 575,
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
  placeholder: {
    fontSize: 24,
    color: fontColor,
    textAlign: 'center',
  },
};

class Leaderboard extends Component {
  state = {};

  componentDidMount() {
    const {
      initialPageSize,
      requestBottomSymbols,
      requestTopSymbols,
      bottomSymbols,
      topSymbols,
    } = this.props;

    if (R.isEmpty(bottomSymbols)) {
      requestBottomSymbols(initialPageSize, 0);
    }

    if (R.isEmpty(topSymbols)) {
      requestTopSymbols(initialPageSize, 0);
    }
  }

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
          Click a row from the tables to view a chart.
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
        />
      </div>
    );
  };

  getColumns = () => [
    <Column
      key={1}
      label="#"
      dataKey="i"
      width={75}
      flexGrow={0.5}
      style={styles.text}
    />,
    SymbolColumn,
    <Column
      key={3}
      label="Popularity"
      dataKey="popularity"
      width={125}
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

  getDefaultSymbolTableProps = data => ({
    onRowClick: this.updateSymbolChart,
    columns: this.getColumns(),
    height: '80vh',
    rowGetter: this.getRowGetter(data),
    data,
  });

  PopulatedSymbolTable = ({ data, ...props }) => {
    if (R.isEmpty(data)) {
      return <Loading />;
    }

    return (
      <SymbolTable {...this.getDefaultSymbolTableProps(data)} {...props} />
    );
  };

  render = () => (
    <div style={styles.root}>
      <div style={styles.tablesWrapper}>
        <this.PopulatedSymbolTable
          label="Most Popular"
          loadMoreData={this.fetchMoreTopSymbols}
          data={this.props.topSymbols}
        />
        <this.PopulatedSymbolTable
          label="Least Popular"
          loadMoreData={this.fetchMoreBottomSymbols}
          data={this.props.bottomSymbols}
        />
      </div>

      <div style={styles.chartWrapper}>
        <div style={{ width: '100%' }}>{this.renderSymbolChart()}</div>
      </div>
    </div>
  );
}

Leaderboard.defaultProps = {
  initialPageSize: 50,
};

const mapStateToProps = ({ api }) =>
  R.pick(
    ['bottomSymbols', 'topSymbols', 'popularityHistory', 'quoteHistory'],
    api
  );

export default connect(mapStateToProps, {
  requestBottomSymbols,
  requestTopSymbols,
  requestPopularityHistory,
  requestQuoteHistory,
})(Leaderboard);
