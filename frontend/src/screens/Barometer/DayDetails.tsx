import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { Column } from 'react-virtualized';

import { fetchTopChangesForDay } from 'src/api';
import Loading from 'src/components/Loading';
import { withMobileProp } from 'src/components/ResponsiveHelpers';
import SymbolTable from 'src/components/SymbolTable';
import { getDefaultColumnProps } from 'src/screens/PopularityChanges';
import { SymbolColumn } from 'src/components/SymbolTable';

const computePopDiffPercent = (
  startPop: number | null,
  endPop: number | null,
  popDiff: number | null
): number | null => {
  if ((startPop === null && endPop === null) || popDiff === null) {
    return null;
  }

  if (startPop === null || startPop === 0) {
    return Infinity;
  }

  return (popDiff / startPop) * 100;
};

const getColor = (val: number | null) => {
  if (val === 0 || val === null) {
    return undefined;
  } else if (val > 0) {
    return '#43b249';
  } else {
    return '#b24343';
  }
};

const PopDiff: React.FC<{
  popDiff: number | null;
  popChangePercent: number | null;
}> = ({ popDiff, popChangePercent }) => (
  <div className="pop-change-cell">
    <div style={{ color: getColor(popDiff) }}>
      {popDiff === null ? '--' : (popDiff === null || popDiff >= 0 ? '+' : '') + popDiff.toLocaleString()}
    </div>
    <div style={{ paddingLeft: 4, paddingRight: 4 }}>{' / '}</div>
    <div style={{ color: getColor(popChangePercent) }}>
      {popChangePercent === null ? '--' : (popChangePercent >= 0 ? '+' : '') + popChangePercent.toFixed(2) + '%'}
    </div>
  </div>
);

const PriceDiff: React.FC<{
  priceDiff: number | null;
  priceChangePercent: number | null;
}> = ({ priceDiff, priceChangePercent }) => (
  <div className="pop-change-cell">
    <div style={{ color: getColor(priceDiff) }}>
      {priceDiff === null
        ? '--'
        : (priceDiff === null || priceDiff >= 0 ? '+$' : '-$') +
          Math.abs(priceDiff).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
    </div>
    <div style={{ paddingLeft: 4, paddingRight: 4 }}>{' / '}</div>
    <div style={{ color: getColor(priceChangePercent) }}>
      {priceChangePercent === null ? '--' : (priceChangePercent >= 0 ? '+' : '') + priceChangePercent.toFixed(2) + '%'}
    </div>
  </div>
);

const fetchDayData = async (key: string, dayID: string) => {
  const data = await fetchTopChangesForDay(key, dayID);

  return data.map(({ symbol, name, start_popularity, end_popularity, start_price, end_price }, i) => {
    const popDiff =
      start_popularity === null && end_popularity === null ? null : (end_popularity || 0) - (start_popularity || 0);
    const popChangePercent = computePopDiffPercent(start_popularity, end_popularity, popDiff);
    const priceDiff = start_price === null && end_price === null ? null : (end_price || 0) - (start_price || 0);
    const priceChangePercent = computePopDiffPercent(start_price, end_price, priceDiff);

    return {
      symbol,
      name,
      i: i + 1,
      formattedPopDiff: <PopDiff popDiff={popDiff} popChangePercent={popChangePercent} />,
      formattedPriceDiff: <PriceDiff priceDiff={priceDiff} priceChangePercent={priceChangePercent} />,
    };
  });
};

const DayDetails: React.FC<{ dayID: string; mobile: boolean }> = ({ dayID, mobile }) => {
  const { data } = useQuery({
    queryKey: ['totalChangePerDay', dayID],
    queryFn: fetchDayData,
    config: { refetchOnWindowFocus: false },
  });

  const defaultColumnProps = useMemo(() => getDefaultColumnProps(mobile) as any, [mobile]);
  const columns = useMemo(
    () => [
      <Column {...defaultColumnProps} key={0} label="#" dataKey="i" width={mobile ? 20 : 32} flexGrow={0.5} />,
      SymbolColumn({ mobile, width: 46 }),
      <Column
        {...defaultColumnProps}
        cellRenderer={({ cellData }) => cellData}
        key={3}
        label="Pop. Change"
        dataKey="formattedPopDiff"
      />,
      <Column
        {...defaultColumnProps}
        cellRenderer={({ cellData }) => cellData}
        key={4}
        label="Price Change"
        dataKey="formattedPriceDiff"
      />,
    ],
    [mobile, defaultColumnProps]
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <SymbolTable
      columns={columns}
      label={`Top Popularity Changes for ${dayID}`}
      data={data}
      loadMoreData={() => undefined}
      totalRowCount={data.length}
      rowGetter={({ index }: { index: number }) => data[index]}
      disableHeader={false}
      mobile={mobile}
      style={{
        minWidth: mobile ? undefined : 600,
        maxWidth: mobile ? undefined : 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      onRowClick={() => undefined}
    />
  );
};

export default withMobileProp({ maxDeviceWidth: 800 })(DayDetails);
