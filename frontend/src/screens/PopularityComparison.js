/**
 * View a comparison of popularities for multiple symbols on the same chart.
 */

import React from 'react';
import { connect } from 'react-redux';

import { getSelectedSymbols } from 'src/selectors/popularityComparison';
import { PopularityComparisonChart } from 'src/components/PopularityChart';

const PopularityComparison = ({ selectedSymbols }) => (
  <div>
    <PopularityComparisonChart symbols={selectedSymbols} />
  </div>
);

const mapStateToProps = state => ({
  selectedSymbols: getSelectedSymbols,
});

export default connect(mapStateToProps)(PopularityComparison);
