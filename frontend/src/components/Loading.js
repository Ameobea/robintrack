import React from 'react';

import { backgroundColor, fontColor } from 'src/style';

const styles = {
  root: {
    backgroundColor,
    display: 'flex',
    flex: 1,
    fontSize: 24,
    color: fontColor,
    height: '100%',
  },
};

const Loading = ({ style = {} }) => <div style={{ ...styles.root, ...style }}>Loading...</div>;

export default Loading;
