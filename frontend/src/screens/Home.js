import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import { backgroundColor } from 'src/style';
import { headerItems } from 'src/components/Header';
import { withMobileProp } from 'src/components/ResponsiveHelpers';

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

const About = () => (
  <Fragment>
    <h2>What is it Robintrack?</h2>
    <p>
      Robintrack keeps track of how many{' '}
      <a href="https://robinhood.com/">Robinhood</a> users hold a particular
      stock over time. It generates charts showing the relationship between
      price and popularity, and compiles some lists using the data.
    </p>
  </Fragment>
);

const ExampleImage = withMobileProp({ maxDeviceWidth: 600 })(
  ({ src, alt, caption, url, mobile }) => (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: mobile ? 250 : 400,
        paddingBottom: 15,
      }}
    >
      <Link to={url}>
        <img
          src={src}
          alt={alt}
          style={{ minWidth: 250, maxWidth: mobile ? '90vw' : 400 }}
        />
      </Link>
      <center>{caption}</center>
    </div>
  )
);

const Info = () => (
  <Fragment>
    <h2 style={{ paddingTop: 10 }}>What can it do?</h2>
    <p>
      Retail traders (individual traders who don&quot;t work for a financial
      instituation like a bank or hedge fund) generally suck at trading. In the
      Foreign Exchange markets, some people use the percentage of retail traders
      who are long or short a given currency pair as a contrarian indicator
      (meaning that if most people are short, the pair is likely to rise and
      vice versa).
    </p>

    <p>
      For the stock market, it&quot;s a bit different. One of the most useful
      things that you can do with the data that this site provides is figure out
      who people are reacting to moves in the market. Depending on if people are
      buying the dip, getting onboard during a rise in price because they think
      it's going to go higher, or taking profits, this data lets you see each of
      those different siuations and plan your own trading accordingly.
    </p>

    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <ExampleImage
        src="/images/buying_the_dip.png"
        alt="A chart showing the price vs popularity of Starbucks stock ($SBUX) while traders buy the dip during a drop in price."
        url="/symbol/SBUX"
        caption={
          <Fragment>
            {'Traders buying the dip in '}
            <Link to="/symbol/SBUX">SBUX</Link>
          </Fragment>
        }
      />
      <ExampleImage
        src="/images/taking_profits.png"
        alt="A chart showing the price vs popularity of AMD stock ($AMD) while traders take profits during a rise in price."
        url="/symbol/AMD"
        caption={
          <Fragment>
            {'Traders taking profits during a run-up in '}
            <Link to="/symbol/AMD">AMD</Link>
          </Fragment>
        }
      />
      <ExampleImage
        src="/images/fomo.png"
        alt="A chart showing the price vs popularity of iQIYI inc. stock ($IQ) while traders greed out and keep buying more and more as the price continues to rise."
        url="/symbol/IQ"
        caption={
          <Fragment>
            {'Traders going full FOMO on '}
            <Link to="/symbol/IQ">IQ</Link>
          </Fragment>
        }
      />
    </div>

    <h2>How it works</h2>
    <p>
      Every hour, the price and popularity for every stock on Robinhood is
      downloaded from the Robinhood API and stored. By combining all of these
      data points together, it&quot;s possible to view trends and analyze the
      ways in which they both change with respect to each other and over time.
    </p>

    <span
      style={{
        fontSize: 10,
        color: '#888',
        fontStyle: 'italic',
        display: 'block',
      }}
    >
      This site is for informational purposes only. It is not intended to be
      investment advice. However, if you do end up loading up on OTM weekly
      options because of something you saw on the site, please put me in the
      screenshot of your losses when you post to /r/WSB &lt;3
    </span>
  </Fragment>
);

const Home = () => (
  <div style={{ backgroundColor }}>
    <center>
      <h1>Robintrack</h1>
    </center>
    <hr />

    <About />
    <QuickLinks />
    <Info />
  </div>
);

export default Home;
