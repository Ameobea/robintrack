import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import { backgroundColor } from 'src/style';
import { headerItems } from 'src/components/Header';

const QuickLinks = () => (
  <Fragment>
    <h2 style={{ paddingTop: 20 }}>Quick Links</h2>
    {headerItems.filter(R.prop('url')).map(({ content, url }, i) => (
      <li key={i} style={{ marginLeft: 25 }}>
        <Link to={url} style={{ fontSize: 24 }}>
          {content}
        </Link>
      </li>
    ))}
  </Fragment>
);

const Home = () => (
  <div style={{ backgroundColor }}>
    <center>
      <h1>Robintrack</h1>
    </center>
    <hr />
    <h2>What is it Robintrack?</h2>
    Robintrack keeps track of how many{' '}
    <a href="https://robinhood.com/">Robinhood</a> users hold a particular stock
    over time. It generates charts showing the relationship between price and
    popularity, and compiles some lists using the data.
    <QuickLinks />
  </div>
);

export default Home;
