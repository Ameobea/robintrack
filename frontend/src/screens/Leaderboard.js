import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { Column } from 'react-virtualized';
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
import SymbolTable from 'src/components/SymbolTable';

const styles = {
  text: { fontSize: 24 },
};

const renderSymbol = ({ cellData }) => (
  <Link to={`/symbol/${cellData}`}>
    <span style={styles.text}>{cellData}</span>
  </Link>
);

class Leaderboard extends Component {
  state = {};

  componentDidMount() {
    const {
      initialPageSize,
      requestBottomSymbols,
      requestTopSymbols,
    } = this.props;

    if (R.isEmpty(this.props.bottomSymbols)) {
      requestBottomSymbols(initialPageSize, 0);
    }

    if (R.isEmpty(this.props.topSymbols)) {
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
        <div style={{ fontSize: 24, color: fontColor, textAlign: 'center' }}>
          Click a row from the tables to view a chart.
        </div>
      );
    }

    if (!popularityHistoryForSymbol || !quoteHistoryForSymbol) {
      return <Loading />;
    }

    return (
      <PopularityChart
        symbol={symbol}
        popularityHistory={popularityHistoryForSymbol}
        quoteHistory={quoteHistoryForSymbol}
      />
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
    <Column
      key={2}
      label="Symbol"
      dataKey="symbol"
      cellRenderer={renderSymbol}
      width={125}
      flexGrow={1}
      style={styles.text}
    />,
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

  render = () => {
    const { topSymbols, bottomSymbols } = this.props;

    if (!this.props.bottomSymbols || !this.props.topSymbols) {
      return <Loading />;
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          paddingBottom: 50,
          backgroundColor,
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1.4,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <SymbolTable
            label="Most Popular"
            data={topSymbols}
            loadMoreData={this.fetchMoreTopSymbols}
            onRowClick={this.updateSymbolChart}
            columns={this.getColumns()}
            rowGetter={this.getRowGetter(topSymbols)}
          />
          <SymbolTable
            label="Least Popular"
            data={bottomSymbols}
            loadMoreData={this.fetchMoreBottomSymbols}
            onRowClick={this.updateSymbolChart}
            columns={this.getColumns()}
            rowGetter={this.getRowGetter(bottomSymbols)}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            minWidth: '50vw',
            paddingTop: 50,
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          <div style={{ width: '100%' }}>{this.renderSymbolChart()}</div>
        </div>
      </div>
    );
  };
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
