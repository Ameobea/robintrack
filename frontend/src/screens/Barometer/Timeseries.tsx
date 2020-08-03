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
import { INTENT_DANGER } from '@blueprintjs/core/lib/esm/common/classes';

const fmtr = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  day: 'numeric',
  month: 'numeric',
  timeZone: 'EST',
});
const formatDate = (input: string | null | Date) => {
  if (!input) {
    return null;
  }

  const [day, month, year] = fmtr.format(input instanceof Date ? input : new Date(input)).split(/\//g);
  return `${year}-${month}-${day}`;
};

const buildOptions = (
  mobile: boolean,
  data: { day_id: string; abs_pop_diff_sum: number }[],
  spyQuoteHistory: { last_trade_price: number; timestamp: string }[]
): echarts.EChartOption => {
  const [categoryData, valueData, dayIDs] = data.reduce(
    ([categoryData, valueData, dayIDs], { day_id, abs_pop_diff_sum }): [string[], number[], string[]] => {
      categoryData.push(day_id);
      valueData.push(abs_pop_diff_sum);
      dayIDs.push(day_id);
      return [categoryData, valueData, dayIDs];
    },
    [[], [], []] as [string[], number[], string[]]
  );

  const { acc: spyPriceData, minPrice, maxPrice } = dayIDs.reduce(
    ({ lastDayID, acc, rest, minPrice, maxPrice }, dayID) => {
      if (rest.length === 0) {
        return { lastDayID: dayID, acc, rest, minPrice, maxPrice };
      }

      if (rest[0][0] === lastDayID) {
        rest.shift();
        return { lastDayID, acc, rest, minPrice, maxPrice };
      }

      // Our quote was for a day that we're ignoring
      while (rest.length > 0 && formatDate(rest[0][0])! < dayID) {
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
        labelFormatter: (_index: number, dateString: string) => {
          const date = new Date(dateString);
          return `${date.getMonth() + 1}/${date.getDate()}\n${date.getFullYear()}`;
        },
        ...(mobile ? { handleIcon: MobileZoomHandle, handleSize: '80%' } : {}),
      },
    ],
    xAxis: {
      type: 'category',
      data: categoryData,
      silent: false,
      axisLabel: {
        formatter: (dateString: string, _index: number) => {
          // Formatted to be month/day; display year only in the first label
          const [y, m, d] = dateString.split('-');
          return `${m}/${d}\n${y}`;
        },
        color: '#ddd',
      },
    },
    grid: {
      bottom: 75,
      top: mobile ? 95 : 75,
      left: mobile ? 34 : 75,
      right: mobile ? 26 : 75,
    },
    yAxis: [
      {
        type: 'value',
        name: 'Aggregate Unique Position\n Count Difference',
        axisLabel: {
          color: '#ddd',
          fontSize: 10,
          formatter: mobile
            ? (value: number) => `${(value / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })}k`
            : undefined,
          margin: mobile ? 2 : undefined,
        },
        nameTextStyle: { color: '#aaa', padding: [0, 0, 0, 80] },
      },
      {
        type: 'value',
        name: '$SPY Price',
        axisLabel: {
          color: '#ddd',
          showMaxLabel: false,
          showMinLabel: false,
          formatter: mobile
            ? (value: number) => `$${value.toFixed(0)}`
            : (value: number) =>
                value.toLocaleString(undefined, {
                  style: 'currency',
                  currency: 'USD',
                }),
          fontSize: 10,
          margin: mobile ? 2 : undefined,
        },
        nameTextStyle: { color: '#aaa', padding: [0, 16, 6, 0] },
        splitLine: { show: false },
        min: minPrice - priceOffset,
        max: maxPrice + priceOffset,
      },
    ],
    series: [
      {
        type: 'bar',
        name: 'Abs. Agg. Position Count Diff',
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

const BarometerTimeseries: React.FC<{ mobile: boolean; onDaySelect: (dayID: string) => void }> = ({
  mobile,
  onDaySelect,
}) => {
  const { data: options } = useQuery({
    queryKey: 'barometer_timeseries',
    queryFn: () =>
      Promise.all([
        fetchBarometerTimeseries(),
        fetchQuoteHistory('SPY').then(res => res.json()),
      ] as const).then(([data, spyQuoteHistory]) => buildOptions(mobile, data, spyQuoteHistory)),
    config: { refetchOnWindowFocus: false },
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
        onEvents={{
          click: ({ componentType, name }: { componentType: string; name: string }) => {
            if (componentType !== 'series') {
              return;
            }

            onDaySelect(name);
          },
        }}
        style={{ height: (mobile ? 0.5 : 0.7) * getViewportHeight() }}
      />
    </div>
  );
};

export default React.memo(withMobileProp({ maxDeviceWidth: 600 })(BarometerTimeseries));
