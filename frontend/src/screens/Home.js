import React from 'react';
import { Link } from 'react-router-dom';

import { backgroundColor } from 'src/style';

const Home = () => (
  <div style={{ backgroundColor }}>
    <center>
      <h1>Robintrack</h1>
    </center>
    <div>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
    <div>
      <Link to="/symbol/SPY">SPY</Link>
    </div>
  </div>
);

export default Home;
