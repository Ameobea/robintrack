/**
 * Creates the chart that is displayed on the `SymbolDetails` page that compares the
 * popularity to the price of an asset over time.
 */

import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
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
import { getPopularityHistory } from 'src/selectors/api';

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

const splitLineOptions = {
  lineStyle: { color: '#323232' },
};

const getXAxisOptions = ({
  mobile,
  firstPopularity,
  lastPopularity,
  firstQuote,
  lastQuote,
}) => ({
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
});

const seriesDefaults = {
  symbol: 'circle',
  showSymbol: false,
  type: 'line',
  smooth: false,
  animation: false,
};

const getYAxisDefaults = mobile => ({
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
});

const getBaseConfigDefaults = mobile => ({
  backgroundColor: '#1d2126',
  legend: { show: true, textStyle: { color: '#fff' } },
  grid: {
    bottom: 75,
    top: mobile ? 25 : 75,
    left: mobile ? 8 : 75,
    right: mobile ? 13 : 75,
  },
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
});

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

  const xAxisOptions = getXAxisOptions({
    mobile,
    firstPopularity,
    lastPopularity,
    firstQuote,
    lastQuote,
  });
  const yAxisDefaults = getYAxisDefaults(mobile);

  return {
    ...getBaseConfigDefaults,
    title: { text: `Popularity History for ${symbol}` },
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

const getViewportHeight = () =>
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const BasePopularityChart = ({ mobile, style, options }) => {
  const viewportHeight = getViewportHeight();
  const height = (mobile ? 0.5 : 0.7) * viewportHeight;
  const mergedStyle = {
    height,
    ...(mobile ? { marginLeft: -15, marginRight: -15 } : {}),
    ...style,
  };

  return (
    <ReactEchartsCore
      option={options}
      echarts={echarts}
      notMerge={true}
      lazyUpdate={true}
      opts={{}}
      style={mergedStyle}
    />
  );
};

const PopularityChart = ({ style, ...props }) => (
  <Fragment>
    <BasePopularityChart options={getChartOptions(props)} {...props} />

    {props.mobile ? (
      <center style={styles.mobileHint}>
        Touch the chart to view price + popularity values
      </center>
    ) : null}
  </Fragment>
);

const createYAxisOptions = series => ({});

const getComparisonChartOptions = ({
  symbols,
  popularityHistories = {},
  mobile,
}) => {
  const analyzedSeries = R.keys(symbols).reduce(
    (acc, symbol) => ({ ...acc, [symbol]: analyzeTimeSeries(symbol) }),
    {}
  );

  return {
    ...getBaseConfigDefaults(mobile),
    title: { text: 'Popularity Comparison' },
  };
};

export const InnerPopularityComparisonChart = ({ style, ...props }) => (
  <BasePopularityChart options={getComparisonChartOptions(props)} {...props} />
);

const mapComparisonChartStateToProps = (state, { symbols }) => ({
  popularityHistories: R.zipObj(
    symbols,
    symbols.map(symbol => getPopularityHistory(symbol)(state))
  ),
});

export const PopularityComparisonChart = compose(
  withMobileProp({
    maxDeviceWidth: 600,
  }),
  connect(mapComparisonChartStateToProps)
)(InnerPopularityComparisonChart);

export default withMobileProp({
  maxDeviceWidth: 600,
})(PopularityChart);
