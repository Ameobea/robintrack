import React from 'react';
import { AutoSizer, Column, InfiniteLoader, Table } from 'react-virtualized';
import { Link } from 'react-router-dom';

import { emphasis, fontColor } from 'src/style';

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
}) => (
  <div style={{ ...styles.root, ...style }} className="symbol-table">
    <h2 style={styles.header}>{label}</h2>

    <div style={{ height, flexDirection: 'row' }}>
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
                disableHeader={disableHeader}
                ref={registerChild}
                headerHeight={30}
                height={height}
                width={width}
                rowCount={data.length}
                rowGetter={rowGetter}
                rowRenderer={renderRow}
                rowHeight={34}
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

const renderSymbol = ({ cellData }) => (
  <Link to={`/symbol/${cellData}`}>
    <span style={{ ...styles.text, color: emphasis }}>{cellData}</span>
  </Link>
);

export const SymbolColumn = (
  <Column
    key="symbol"
    label="Symbol"
    dataKey="symbol"
    cellRenderer={renderSymbol}
    width={100}
    flexGrow={1}
    style={styles.text}
  />
);

export default SymbolTable;
