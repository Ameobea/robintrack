import React, { useState } from 'react';
import { compose } from 'recompose';
import { AutoSizer, Column, InfiniteLoader, Table } from 'react-virtualized';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Popover, Position } from '@blueprintjs/core';

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

const SymbolRow = ({
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
  setHoveredSymbol,
}) => {
  const hilightStyle = selectedSymbol === rowData.symbol ? { backgroundColor: '#191919' } : {};

  return (
    <div
      key={key}
      style={style}
      className={className}
      onMouseOver={() => setHoveredSymbol(rowData.symbol)}
      onMouseLeave={() => setHoveredSymbol(null)}
    >
      <div
        style={R.mergeAll([
          styles.row,
          mobile && !fullHeight
            ? {
                paddingTop: 5,
                paddingBottom: 5,
              }
            : {},
          hilightStyle,
        ])}
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
}) => {
  const [hoveredSymbol, setHoveredSymbol] = useState(null);

  return (
    <div style={R.merge(styles.root, style)} className="symbol-table">
      {label ? <h2 style={{ ...styles.header, fontSize: mobile ? 16 : 34 }}>{label}</h2> : null}

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
                  hoveredSymbol={hoveredSymbol}
                  disableHeader={disableHeader}
                  ref={registerChild}
                  headerHeight={30}
                  headerStyle={mobile ? { fontSize: 8 } : undefined}
                  height={height}
                  width={width}
                  rowCount={data.length}
                  rowGetter={rowGetter}
                  rowRenderer={props => (
                    <SymbolRow
                      selectedSymbol={selectedSymbol}
                      mobile={mobile}
                      fullHeight={fullHeight}
                      {...props}
                      setHoveredSymbol={setHoveredSymbol}
                    />
                  )}
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
};

const Symbol = React.memo(
  ({ cellData, mobile, tooltipContent }) => (
    <Popover
      hoverCloseDelay={0}
      hoverOpenDelay={0}
      content={
        <span
          style={{
            fontSize: 16,
            display: 'block',
            height: 28,
          }}
        >
          <div style={{ paddingTop: 2, paddingRight: 4 }}>{tooltipContent}</div>
        </span>
      }
      isOpen={!!tooltipContent}
      position={Position.RIGHT}
      usePortal={false}
    >
      <Link to={`/symbol/${cellData}`}>
        <span style={{ fontSize: mobile ? 12 : 24, color: emphasis }}>{cellData}</span>
      </Link>
    </Popover>
  ),
  (oldProps, newProps) =>
    oldProps.cellData === newProps.cellData &&
    oldProps.mobile === newProps.mobile &&
    oldProps.tooltipContent === newProps.tooltipContent
);

export const SymbolColumn = ({ mobile }) => (
  <Column
    key="symbol"
    label="Symbol"
    dataKey="symbol"
    cellRenderer={({ ...props }) => (
      <Symbol
        tooltipContent={props.parent.props.hoveredSymbol === props.rowData.symbol ? props.rowData.name : null}
        mobile={mobile}
        {...props}
      />
    )}
    width={125}
    flexGrow={1}
    style={{ fontSize: mobile ? 14 : 24 }}
  />
);

const mapStateToProps = ({ api: { totalSymbols } }) => ({
  totalRowCount: totalSymbols,
});

export default compose(connect(mapStateToProps), withMobileProp({ maxDeviceWidth: 500 }))(SymbolTable);
