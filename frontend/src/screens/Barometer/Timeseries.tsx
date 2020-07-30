import ReactEchartsCore from 'echarts-for-react/lib/core';
import React from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/graphic';
import { useQuery } from 'react-query';

import Loading from 'src/components/Loading';
import { fetchBarometerTimeseries } from 'src/api';
import { withMobileProp } from 'src/components/ResponsiveHelpers';
import { getBaseConfigDefaults, getViewportHeight } from 'src/components/PopularityChart';
import MobileZoomHandle from 'src/components/MobileZoomHandle';
import { emphasis } from 'src/style';

const buildOptions = (mobile: boolean, data: { day_id: string; abs_pop_diff_sum: number }[]): echarts.EChartOption => {
  const [categoryData, valueData] = data.reduce(
    ([categoryData, valueData], { day_id, abs_pop_diff_sum }): [Date[], number[]] => {
      categoryData.push(new Date(day_id + ' 08:00:00 EST'));
      valueData.push(abs_pop_diff_sum);
      return [categoryData, valueData];
    },
    [[], []] as [Date[], number[]]
  );

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
      data: categoryData,
      silent: false,
      axisLabel: {
        showMinLabel: false,
        showMaxLabel: false,
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
        axisLabel: { color: '#ddd' },
        nameTextStyle: { color: '#aaa' },
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
    ],
  };
};

const BarometerTimeseries: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const { data: options } = useQuery({
    queryKey: 'barometer_timeseries',
    queryFn: () => fetchBarometerTimeseries().then(data => buildOptions(mobile, data)),
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
