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
import * as R from 'ramda';

const analyzeTimeSeries = series => {
  const values = series.map(arr => arr[1]);
  const first = series[0] || [new Date('3000-04-20'), 0];
  const last = R.last(series) || [new Date('1900-04-20'), 0];
  const min = values.reduce(R.min, first[1]);
  const max = values.reduce(R.max, first[1]);
  const offset = 0.05 * (max - min);

  return [min, max, first, last, offset];
};

const getChartOptions = ({ symbol, quoteHistory, popularityHistory }) => {
  const quoteSeries = quoteHistory.map(({ timestamp, bid, ask }) => [
    new Date(timestamp),
    (bid + ask) / 2,
  ]);
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

  const xAxisOptions = {
    type: 'time',
    splitNumber: 20,
    axisLabel: { color: 'white' },
    axisPointer: { snap: false },
    min: R.minBy(R.head, firstPopularity, firstQuote)[0],
    max: R.maxBy(R.head, lastPopularity, lastQuote)[0],
  };

  const seriesDefaults = {
    symbol: 'circle',
    type: 'line',
    smooth: true,
  };

  const yAxisDefaults = {
    type: 'value',
    axisLabel: {
      showMinLabel: false,
      showMaxLabel: false,
      color: '#2c343c',
    },
    splitNumber: 10,
  };

  return {
    backgroundColor: '#2c343c',
    title: { text: `Popularity History for ${symbol}` },
    legend: { show: true, textStyle: { color: '#fff' } },
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
          color: 'white',
        },
        splitLine: { show: true },
      },
      {
        ...yAxisDefaults,
        min: minPopularity - popularityOffset,
        max: maxPopularity + popularityOffset,
        splitLine: { show: false },
      },
    ],
    tooltip: { trigger: 'axis' },
    series: [
      {
        ...seriesDefaults,
        name: 'Price',
        data: quoteSeries,
        yAxisIndex: 0,
        xAxisIndex: 0,
        lineStyle: { color: '#f39' },
        itemStyle: { color: '#f39', borderColor: '#fff' },
      },
      {
        ...seriesDefaults,
        name: '# Users Holding',
        data: popularitySeries,
        yAxisIndex: 1,
        xAxisIndex: 1,
        lineStyle: { color: '#00d68e' },
        itemStyle: { color: '#00d68e', borderColor: '#fff' },
      },
    ],
  };
};

const PopularityChart = ({ symbol, quoteHistory, popularityHistory }) => (
  <ReactEchartsCore
    option={getChartOptions({ symbol, quoteHistory, popularityHistory })}
    echarts={echarts}
    notMerge={true}
    lazyUpdate={true}
    opts={{}}
    style={{ height: 600 }}
  />
);

export default PopularityChart;
