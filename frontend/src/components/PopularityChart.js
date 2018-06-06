/**
 * Creates the chart that is displayed on the `SymbolDetails` page that compares the
 * popularity to the price of an asset over time.
 */

import React, { Fragment } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import * as R from 'ramda';

import { emphasis, emphasis2 } from 'src/style';
import { withMobileProp } from 'src/components/ResponsiveHelpers';
import MobileZoomHandle from 'src/components/MobileZoomHandle';

const styles = {
  root: {},
  mobileHint: {
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
    paddingTop: 5,
  },
};

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
  mobile,
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
    splitNumber: mobile ? 7 : 20,
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
    showSymbol: false,
    type: 'line',
    smooth: false,
    animation: false,
  };

  const yAxisDefaults = {
    type: 'value',
    ...(mobile
      ? { axisLabel: { show: false }, axisTick: { show: false } }
      : {
          axisLabel: {
            showMinLabel: false,
            showMaxLabel: false,
            color: 'white',
          },
        }),
    splitNumber: mobile ? 7 : 10,
    splitLine: splitLineOptions,
  };

  return {
    backgroundColor: '#1d2126',
    title: { text: `Popularity History for ${symbol}` },
    legend: { show: true, textStyle: { color: '#fff' } },
    grid: {
      bottom: 75,
      top: mobile ? 25 : 75,
      left: mobile ? 8 : 75,
      right: mobile ? 13 : 75,
    },
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
          show: !mobile,
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
        ...(mobile ? { handleIcon: MobileZoomHandle, handleSize: '80%' } : {}),
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

const PopularityChart = ({ style, ...props }) => (
  <Fragment>
    <ReactEchartsCore
      option={getChartOptions(props)}
      echarts={echarts}
      notMerge={true}
      lazyUpdate={true}
      opts={{}}
      style={{
        height:
          (props.mobile ? 0.5 : 0.7) *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          ),
        style,
        ...(props.mobile ? { marginLeft: -15, marginRight: -15 } : {}),
      }}
    />

    {props.mobile ? (
      <center style={styles.mobileHint}>
        Touch the chart to view price + popularity values
      </center>
    ) : null}
  </Fragment>
);

export default withMobileProp({
  maxDeviceWidth: 600,
})(PopularityChart);
