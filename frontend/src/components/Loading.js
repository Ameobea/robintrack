import React from 'react';

import { backgroundColor, fontColor } from 'src/style';

const Loading = () => (
  <div
    style={{
      backgroundColor,
      display: 'flex',
      flex: 1,
      fontSize: 24,
      color: fontColor,
      height: '100%',
    }}
  >
    Loading...
  </div>
);

export default Loading;
