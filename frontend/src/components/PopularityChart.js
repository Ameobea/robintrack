/**
 * Creates the chart that is displayed on the `SymbolDetails` page that compares the
 * popularity to the price of an asset over time.
 */

import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import * as R from 'ramda';

import { emphasis, emphasis2 } from 'src/style';

const analyzeTimeSeries = series => {
  const values = series.map(arr => arr[1]);
  const first = series[0] || [new Date('3000-04-20'), 0];
  const last = R.last(series) || [new Date('1900-04-20'), 0];
  const min = values.reduce(R.min, first[1]);
  const max = values.reduce(R.max, first[1]);
  const offset = 0.05 * (max - min);

  return [min, max, first, last, offset];
};

const getChartOptions = ({
  symbol,
  quoteHistory = [],
  popularityHistory = [],
}) => {
  const quoteSeries = quoteHistory.map(
    ({ timestamp, last_trade_price: lastTradePrice }) => [
      new Date(timestamp),
      lastTradePrice,
    ]
  );
  const popularitySeries = popularityHistory.map(
    ({ timestamp, popularity }) => [new Date(timestamp), popularity]
  );

  const [
    minQuote,
    maxQuote,
    firstQuote,
    lastQuote,
    quoteOffset,
  ] = analyzeTimeSeries(quoteSeries);
  const [
    minPopularity,
    maxPopularity,
    firstPopularity,
    lastPopularity,
    popularityOffset,
  ] = analyzeTimeSeries(popularitySeries);

  const splitLineOptions = {
    lineStyle: { color: '#323232' },
  };

  const xAxisOptions = {
    type: 'time',
    splitNumber: 20,
    axisLabel: {
      color: 'white',
      showMinLabel: false,
      showMaxLabel: false,
      formatter: (value, index) => {
        // Formatted to be month/day; display year only in the first label
        const date = new Date(value);
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
    },
    axisPointer: { snap: false },
    min: R.minBy(R.head, firstPopularity, firstQuote)[0],
    max: R.maxBy(R.head, lastPopularity, lastQuote)[0],
    splitLine: splitLineOptions,
  };

  const seriesDefaults = {
    symbol: 'circle',
    type: 'line',
    smooth: false,
    animation: false,
  };

  const yAxisDefaults = {
    type: 'value',
    axisLabel: {
      showMinLabel: false,
      showMaxLabel: false,
      color: 'white',
    },
    splitNumber: 10,
    splitLine: splitLineOptions,
  };

  return {
    backgroundColor: '#1d2126',
    title: { text: `Popularity History for ${symbol}` },
    legend: { show: true, textStyle: { color: '#fff' } },
    grid: { bottom: 75 },
    xAxis: [
      xAxisOptions,
      {
        ...xAxisOptions,
        show: false,
        axisPointer: { lineStyle: { color: 'transparent' } },
      },
    ],
    yAxis: [
      {
        ...yAxisDefaults,
        min: minQuote - quoteOffset,
        max: maxQuote + quoteOffset,
        axisLabel: {
          ...yAxisDefaults.axisLabel,
          formatter: value => `$${value.toFixed(2)}`,
        },
        splitLine: { ...yAxisDefaults.splitLine, show: true },
      },
      {
        ...yAxisDefaults,
        min: minPopularity - popularityOffset,
        max: maxPopularity + popularityOffset,
        splitLine: { ...yAxisDefaults.axisLabel, show: false },
        minInterval: 1,
      },
    ],
    tooltip: { trigger: 'axis' },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0, 1],
        showDetail: true,
        fillerColor: '#2d2f33',
        bottom: 5,
        textStyle: { color: '#fff' },
      },
    ],
    series: [
      {
        ...seriesDefaults,
        name: 'Price',
        data: quoteSeries.map(([timestamp, quote]) => [
          timestamp,
          parseFloat(quote.toFixed(3)),
        ]),
        yAxisIndex: 0,
        xAxisIndex: 0,
        lineStyle: { color: emphasis },
        itemStyle: { color: emphasis, borderColor: '#fff' },
      },
      {
        ...seriesDefaults,
        name: '# Users Holding',
        data: popularitySeries,
        yAxisIndex: 1,
        xAxisIndex: 1,
        lineStyle: { color: emphasis2 },
        itemStyle: { color: emphasis2, borderColor: '#fff' },
      },
    ],
  };
};

const PopularityChart = ({
  symbol,
  quoteHistory,
  popularityHistory,
  style = {},
}) => (
  <ReactEchartsCore
    option={getChartOptions({ symbol, quoteHistory, popularityHistory })}
    echarts={echarts}
    notMerge={true}
    lazyUpdate={true}
    opts={{}}
    style={{ height: 600, ...style }}
  />
);

export default PopularityChart;
