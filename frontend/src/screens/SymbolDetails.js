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

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

import {
  requestPopularityHistory,
  requestQuoteHistory,
  requestQuote,
} from 'src/actions/api';

const getChartOptions = ({ symbol, quoteHistory, popularityHistory }) => ({
  title: { text: `Popularity History for ${symbol}` },
  xAxis: [
    {
      type: 'time',
      splitNumber: 10,
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
    {
      type: 'value',
    },
  ],
  series: [
    {
      type: 'line',
      name: 'quote',
      data: quoteHistory.map(({ timestamp, bid, ask }) => [
        new Date(timestamp),
        (bid + ask) / 2,
      ]),
      yAxisIndex: 0,
    },
    {
      type: 'line',
      name: 'popularity',
      data: popularityHistory.map(({ timestamp, popularity }) => [
        new Date(timestamp),
        popularity,
      ]),
      yAxisIndex: 1,
    },
  ],
});

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
  <div>
    <h1>{`${symbol}: ${bid} : ${ask}`}</h1>
    <ReactEchartsCore
      option={getChartOptions({ symbol, quoteHistory, popularityHistory })}
      echarts={echarts}
      notMerge={true}
      lazyUpdate={true}
      opts={{}}
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
    renderComponent(() => <div>Loading...</div>),
    renderComponent(SymbolDetails)
  )
)();
