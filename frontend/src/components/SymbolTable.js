import React from 'react';
import { AutoSizer, InfiniteLoader, Table } from 'react-virtualized';

import { fontColor } from 'src/style';

const SymbolTable = ({
  label,
  data,
  loadMoreData,
  totalRowCount = 6000,
  onRowClick,
  columns,
  rowGetter,
}) => {
  const styles = {
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignSelf: 'center',
      minWidth: 250,
      maxWidth: 300,
      color: fontColor,
    },
    header: {
      textAlign: 'center',
      fontSize: 34,
      fontWeight: 'bold',
    },
    text: { fontSize: 24 },
    row: { backgroundColor: '#111' },
  };

  const renderRow = ({
    key,
    style,
    index,
    columns,
    onRowClick,
    className,
    rowData,
  }) => (
    <div key={key} style={style} className={className}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          backgroundColor: '#111',
          marginTop: 15,
          marginBottom: 15,
          cursor: 'pointer',
          boxShadow: '2px 2px 4px 1px rgba(0,0,0,0.75)',
        }}
        onClick={() => onRowClick({ rowData })}
      >
        {columns}
      </div>
    </div>
  );

  return (
    <div style={styles.root}>
      <h2 style={styles.header}>{label}</h2>

      <div style={{ height: '80vh', flexDirection: 'row' }}>
        <InfiniteLoader
          isRowLoaded={({ index }) => !!data[index]}
          loadMoreRows={loadMoreData}
          rowCount={totalRowCount}
          minimumBatchSize={25}
          threshold={25}
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ height, width }) => (
                <Table
                  disableHeader
                  ref={registerChild}
                  headerHeight={30}
                  height={height}
                  width={width}
                  rowCount={data.length}
                  rowGetter={rowGetter}
                  rowRenderer={renderRow}
                  rowHeight={40}
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
};

export default SymbolTable;
