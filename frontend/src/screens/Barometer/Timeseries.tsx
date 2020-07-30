import ReactEchartsCore from 'echarts-for-react/lib/core';
import React from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/graphic';
import { useQuery } from 'react-query';

import Loading from 'src/components/Loading';
import { fetchBarometerTimeseries, fetchQuoteHistory } from 'src/api';
import { withMobileProp } from 'src/components/ResponsiveHelpers';
import { getBaseConfigDefaults, getViewportHeight } from 'src/components/PopularityChart';
import MobileZoomHandle from 'src/components/MobileZoomHandle';
import { emphasis, emphasis2 } from 'src/style';

const buildOptions = (
  mobile: boolean,
  data: { day_id: string; abs_pop_diff_sum: number }[],
  spyQuoteHistory: { last_trade_price: number; timestamp: string }[]
): echarts.EChartOption => {
  const [categoryData, valueData, dayIDs] = data.reduce(
    ([categoryData, valueData, dayIDs], { day_id, abs_pop_diff_sum }): [Date[], number[], string[]] => {
      categoryData.push(new Date(day_id + ' 08:00:00 EST'));
      valueData.push(abs_pop_diff_sum);
      dayIDs.push(day_id);
      return [categoryData, valueData, dayIDs];
    },
    [[], [], []] as [Date[], number[], string[]]
  );

  const fmtr = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    day: 'numeric',
    month: 'numeric',
    timeZone: 'EST',
  });
  const formatDate = (dateString: string | null) => {
    if (!dateString) {
      return null;
    }

    const [day, month, year] = fmtr.format(new Date(dateString)).split(/\//g);
    return `${year}-${month}-${day}`;
  };

  const { acc: spyPriceData, minPrice, maxPrice } = dayIDs.reduce(
    ({ lastDayID, acc, rest, minPrice, maxPrice }, dayID) => {
      if (rest.length === 0) {
        console.log('all consumed');
        return { lastDayID: dayID, acc, rest, minPrice, maxPrice };
      }

      if (rest[0][0] === lastDayID) {
        rest.shift();
        console.log('skipping dup: ', lastDayID);
        return { lastDayID, acc, rest, minPrice, maxPrice };
      }

      // Our quote was for a day that we're ignoring
      while (rest.length > 0 && formatDate(rest[0][0])! < dayID) {
        console.log('skipping: ', formatDate(rest[0][0]));
        rest.shift();
      }

      // Take the first matching quote for each day
      if (formatDate(rest[0]?.[0]) === dayID) {
        acc.push(rest.shift()![1]);

        return {
          lastDayID: dayID,
          acc,
          rest,
          minPrice: Math.min(rest[0]![1], minPrice),
          maxPrice: Math.max(rest[0]![1], maxPrice),
        };
      } else {
        console.log('no quote for ', dayID);
        acc.push(null);
      }

      return { lastDayID: dayID, acc, rest, minPrice, maxPrice };
    },
    {
      lastDayID: '000000',
      acc: [] as (number | null)[],
      rest: spyQuoteHistory.map(
        ({ last_trade_price, timestamp }) => [timestamp.substring(0, 10), last_trade_price] as const
      ),
      minPrice: Infinity,
      maxPrice: -Infinity,
    }
  );

  const priceOffset = 0.05 * (maxPrice - minPrice);

  return {
    ...(getBaseConfigDefaults(mobile) as any),
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        showDetail: true,
        fillerColor: '#2d2f33',
        bottom: 5,
        textStyle: { color: '#fff' },
        filterMode: 'none',
        realtime: false,
        ...(mobile ? { handleIcon: MobileZoomHandle, handleSize: '80%' } : {}),
      },
    ],
    xAxis: {
      type: 'category',
      data: categoryData,
      silent: false,
      axisLabel: {
        formatter: (value: Date, _index: number) => {
          // Formatted to be month/day; display year only in the first label
          const date = new Date(value);
          return `${date.getMonth() + 1}/${date.getDate()}\n${date.getFullYear()}`;
        },
        color: '#ddd',
      },
    },
    yAxis: [
      {
        type: 'value',
        formatter: (value: number) => `$${value.toFixed(2)}`,
        name: 'Aggregate Unique Position\n Count Difference',
        axisLabel: { color: '#ddd' },
        nameTextStyle: { color: '#aaa' },
      },
      {
        type: 'value',
        name: '$SPY Price',
        axisLabel: { color: '#ddd', showMaxLabel: false, showMinLabel: false },
        nameTextStyle: { color: '#aaa' },
        splitLine: { show: false },
        min: minPrice - priceOffset,
        max: maxPrice + priceOffset,
      },
    ],
    series: [
      {
        type: 'bar',
        name: 'Aggregate Unique Position Count Difference',
        data: valueData,
        lineStyle: { color: emphasis },
        itemStyle: { color: emphasis },
      },
      {
        type: 'line',
        name: 'SPY Price',
        data: spyPriceData,
        lineStyle: { color: emphasis2 },
        itemStyle: { color: emphasis2 },
        yAxisIndex: 1,
        xAxisIndex: 0,
        connectNulls: true,
        showSymbol: false,
        symbol: 'circle',
      },
    ],
  };
};

const BarometerTimeseries: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const { data: options } = useQuery({
    queryKey: 'barometer_timeseries',
    queryFn: () =>
      Promise.all([
        fetchBarometerTimeseries(),
        fetchQuoteHistory('SPY').then(res => res.json()),
      ] as const).then(([data, spyQuoteHistory]) => buildOptions(mobile, data, spyQuoteHistory)),
  });

  if (!options) {
    return <Loading />;
  }

  return (
    <div>
      <ReactEchartsCore
        option={options}
        echarts={echarts}
        notMerge={true}
        lazyUpdate={false}
        opts={{}}
        style={{ height: (mobile ? 0.5 : 0.7) * getViewportHeight() }}
      />
    </div>
  );
};

export default withMobileProp({ maxDeviceWidth: 600 })(BarometerTimeseries);
