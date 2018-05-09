import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import * as R from 'ramda';
import { AutoSizer, Column, InfiniteLoader, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

import {
  requestBottomSymbols,
  requestTopSymbols,
  requestPopularityHistory,
  requestQuoteHistory,
} from 'src/actions/api';
import { fontColor, backgroundColor } from 'src/style';
import Loading from 'src/components/Loading';
import PopularityChart from 'src/components/PopularityChart';

const SymbolTable = ({
  label,
  data,
  loadMoreData,
  totalRowCount = 6000,
  onRowClick,
}) => {
  const rowGetter = ({ index }) => {
    const { popularity, symbol } = data[index];
    return {
      symbol,
      popularity: numeral(popularity).format('0,0'),
      i: index + 1,
    };
  };

  const renderSymbol = ({ cellData }) => (
    <Link to={`/symbol/${cellData}`}>
      <span style={styles.text}>{cellData}</span>
    </Link>
  );

  const styles = {
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignSelf: 'center',
      minWidth: 250,
      maxWidth: 300,
      color: fontColor,
    },
    header: {
      textAlign: 'center',
      fontSize: 34,
      fontWeight: 'bold',
    },
    text: { fontSize: 24 },
    row: { backgroundColor: '#111' },
  };

  const renderRow = ({
    key,
    style,
    index,
    columns,
    onRowClick,
    className,
    rowData,
  }) => (
    <div key={key} style={style} className={className}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          backgroundColor: '#111',
          marginTop: 15,
          marginBottom: 15,
          cursor: 'pointer',
          boxShadow: '2px 2px 4px 1px rgba(0,0,0,0.75)',
        }}
        onClick={() => onRowClick({ rowData })}
      >
        {columns}
      </div>
    </div>
  );

  return (
    <div style={styles.root}>
      <h2 style={styles.header}>{label}</h2>

      <div style={{ height: '80vh', flexDirection: 'row' }}>
        <InfiniteLoader
          isRowLoaded={({ index }) => !!data[index]}
          loadMoreRows={loadMoreData}
          rowCount={totalRowCount}
          minimumBatchSize={25}
          threshold={25}
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ height, width }) => (
                <Table
                  disableHeader
                  ref={registerChild}
                  headerHeight={30}
                  height={height}
                  width={width}
                  rowCount={data.length}
                  rowGetter={rowGetter}
                  rowRenderer={renderRow}
                  rowHeight={40}
                  onRowsRendered={onRowsRendered}
                  onRowClick={({ rowData }) => onRowClick(rowData)}
                >
                  <Column
                    label="#"
                    dataKey="i"
                    width={75}
                    flexGrow={0.5}
                    style={styles.text}
                  />
                  <Column
                    label="Symbol"
                    dataKey="symbol"
                    cellRenderer={renderSymbol}
                    width={125}
                    flexGrow={1}
                    style={styles.text}
                  />
                  <Column
                    label="Popularity"
                    dataKey="popularity"
                    width={125}
                    flexGrow={1}
                    style={styles.text}
                  />
                </Table>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </div>
    </div>
  );
};

class Leaderboard extends Component {
  state = {};

  componentWillMount() {
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
          />
          <SymbolTable
            label="Least Popular"
            data={bottomSymbols}
            loadMoreData={this.fetchMoreBottomSymbols}
            onRowClick={this.updateSymbolChart}
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
