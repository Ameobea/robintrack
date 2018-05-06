import React from 'react';
import { connect } from 'react-redux';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  renderComponent,
} from 'recompose';
import * as R from 'ramda';

import {
  requestPopularityHistory,
  requestQuoteHistory,
  requestQuote,
} from 'src/actions/api';

import PopularityChart from 'src/components/PopularityChart';
import Loading from 'src/components/Loading';

const SymbolDetails = ({
  match: {
    params: { symbol },
  },
  loading,
  bid,
  ask,
  popularityHistory,
  quoteHistory,
  requestQuote,
}) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#16161d',
      color: '#e3e3e3',
    }}
  >
    <h1>{`${symbol}: ${bid} : ${ask}`}</h1>
    <PopularityChart
      symbol={symbol}
      quoteHistory={quoteHistory}
      popularityHistory={popularityHistory}
    />
  </div>
);

const mapStateToProps = ({
  api: { quotes, popularityHistory, quoteHistory },
}) => ({
  quotes,
  popularityHistory,
  quoteHistory,
});

export default compose(
  withProps(({ match: { params: { symbol } } }) => ({ symbol })),
  connect(mapStateToProps, {
    requestQuote,
    requestPopularityHistory,
    requestQuoteHistory,
  }),
  lifecycle({
    componentWillMount() {
      const {
        symbol,
        requestQuote,
        requestPopularityHistory,
        requestQuoteHistory,
      } = this.props;
      requestQuote(symbol);
      requestPopularityHistory(symbol);
      requestQuoteHistory(symbol);
    },
  }),
  withProps(({ symbol, quotes, popularityHistory, quoteHistory }) => ({
    loading:
      !quotes[symbol] || !popularityHistory[symbol] || !quoteHistory[symbol],
    bid: R.path([symbol, 'bid'], quotes),
    ask: R.path([symbol, 'ask'], quotes),
    popularityHistory: popularityHistory[symbol],
    quoteHistory: quoteHistory[symbol],
  })),
  branch(
    R.prop('loading'),
    renderComponent(Loading),
    renderComponent(SymbolDetails)
  )
)();
