import React from 'react';
import { connect } from 'react-redux';
import { Switch } from '@blueprintjs/core';
import { Column } from 'react-virtualized';

import SymbolTable from 'src/components/SymbolTable';
import { requestLargestPopularityChanges } from 'src/actions/api';
import {
  setPopularityChangesChangeType,
  togglePopularityChangesRelative,
} from 'src/actions/popularityChanges';
import Loading from 'src/components/Loading';

const mapStateToPopularityChangesConfigProps = ({
  popularityChanges: { relative },
}) => ({ relative });

const PopularityChangesConfig = connect(
  mapStateToPopularityChangesConfigProps,
  { togglePopularityChangesRelative }
)(({ relative, togglePopularityChangesRelative }) => (
  <div style={{ backgroundColor: '#444', width: 500 }}>
    <Switch
      large
      label="Relative"
      checked={relative}
      onChange={togglePopularityChangesRelative}
    />
  </div>
));

const styles = {
  text: { fontSize: 24 },
};

class PopularityChanges extends React.Component {
  componentDidMount() {
    this.props.requestLargestPopularityChanges(this.props.config);
  }

  getData = () => null; // TODO

  loadMoreData = ({ startIndex, stopIndex }) => Promise.resolve(null); // TODO

  getColumns = () => [
    <Column
      key={0}
      label="#"
      dataKey="i"
      width={75}
      flexGrow={0.5}
      style={styles.text}
    />,
  ];

  renderSymbolTable = () => {
    const data = this.getData();
    if (!data) {
      return <Loading />;
    }

    return (
      <SymbolTable
        label="Popularity Changes"
        columns={this.getColumns()}
        data={data}
        loadMoreData={this.loadMoreData}
        rowGetter={({ index }) => data[index]}
      />
    );
  };

  render = () => (
    <div>
      <h1>Popularity Changes</h1>
      <PopularityChangesConfig />
      {this.renderSymbolTable()}
    </div>
  );
}

PopularityChanges.defaultProps = {
  pageSize: 50,
};

const mapStateToProps = (
  { api: { largestPopularityChanges }, popularityChanges },
  { pageSize = 50 }
) => ({
  largestPopularityChanges,
  config: { ...popularityChanges, limit: pageSize },
});

export default connect(mapStateToProps, {
  requestLargestPopularityChanges,
  setPopularityChangesChangeType,
  togglePopularityChangesRelative,
})(PopularityChanges);
