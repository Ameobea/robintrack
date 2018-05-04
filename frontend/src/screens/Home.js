import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/leaderboard">Leaderboard</Link>
    <Link to="/symbol/SPY">SPY</Link>
  </div>
);

export default Home;
