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

const Loading = () => <div style={styles.root}>Loading...</div>;

export default Loading;
