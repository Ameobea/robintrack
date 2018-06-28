import React from 'react';
import { compose } from 'recompose';
import { AutoSizer, Column, InfiniteLoader, Table } from 'react-virtualized';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { emphasis, fontColor } from 'src/style';
import { withMobileProp } from 'src/components/ResponsiveHelpers';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    minWidth: 300,
    maxWidth: 350,
    color: fontColor,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#111',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px 1px rgba(0,0,0,0.75)',
  },
};

const renderRow = ({
  key,
  style,
  index,
  columns,
  onRowClick,
  className,
  rowData,
  selectedSymbol,
  mobile,
  fullHeight,
}) => {
  const hilightStyle =
    selectedSymbol === rowData.symbol ? { backgroundColor: '#333' } : {};

  return (
    <div key={key} style={style} className={className}>
      <div
        style={R.merge(
          styles.row,
          mobile && !fullHeight
            ? {
                paddingTop: 5,
                paddingBottom: 5,
              }
            : {},
          hilightStyle
        )}
        onClick={() => onRowClick({ rowData })}
      >
        {columns}
      </div>
    </div>
  );
};

const SymbolTable = ({
  label,
  data,
  loadMoreData,
  totalRowCount = 6000,
  onRowClick,
  columns,
  rowGetter,
  style = {},
  disableHeader = true,
  height = '80vh',
  fullHeight = false,
  selectedSymbol,
  mobile,
  minBatchSize = 25,
}) => (
  <div style={R.merge(styles.root, style)} className="symbol-table">
    {label && (
      <h2 style={{ ...styles.header, fontSize: mobile ? 16 : 34 }}>{label}</h2>
    )}

    <div style={{ height, flexDirection: 'row' }}>
      <InfiniteLoader
        isRowLoaded={({ index }) => !!data[index]}
        loadMoreRows={loadMoreData}
        rowCount={totalRowCount}
        minimumBatchSize={minBatchSize}
        threshold={25}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <Table
                disableHeader={disableHeader}
                ref={registerChild}
                headerHeight={30}
                headerStyle={mobile ? { fontSize: 8 } : undefined}
                height={height}
                width={width}
                rowCount={data.length}
                rowGetter={rowGetter}
                rowRenderer={props =>
                  renderRow({ selectedSymbol, mobile, fullHeight, ...props })
                }
                rowHeight={mobile && !fullHeight ? 30 : 34}
                onRowsRendered={onRowsRendered}
                onRowClick={({ rowData }) => onRowClick(rowData)}
              >
                {columns}
              </Table>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  </div>
);

const renderSymbol = ({ cellData, mobile }) => (
  <Link to={`/symbol/${cellData}`}>
    <span style={{ fontSize: mobile ? 12 : 24, color: emphasis }}>
      {cellData}
    </span>
  </Link>
);

export const SymbolColumn = ({ mobile, style }) => (
  <Column
    key="symbol"
    label="Symbol"
    dataKey="symbol"
    cellRenderer={props => renderSymbol({ mobile, ...props })}
    width={125}
    flexGrow={1}
    style={{ fontSize: mobile ? 12 : 24 }}
  />
);

const mapStateToProps = ({ api: { totalSymbols } }) => ({
  totalRowCount: totalSymbols,
});

export default compose(
  connect(mapStateToProps),
  withMobileProp({ maxDeviceWidth: 500 })
)(SymbolTable);
