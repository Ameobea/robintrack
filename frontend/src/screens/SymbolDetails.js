import React from 'react';

const SymbolDetails = ({
  match: {
    params: { symbol },
  },
}) => <div>{symbol}</div>;

export default SymbolDetails;
