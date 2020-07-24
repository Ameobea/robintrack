import React from 'react';
import { Link } from 'react-router-dom';

import { backgroundColor } from 'src/style';
import { withMobileProp } from 'src/components/ResponsiveHelpers';
import { ROBINTRACK_LOGO_ALT } from 'src/constants';

const styles = {
  disclaimer: {
    fontStyle: 'italic',
  },
  logo: {
    height: 300,
    width: 300,
    display: 'inline',
  },
  quickLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
  exampleImage: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 15,
  },
};

const About = withMobileProp({ maxDeviceWidth: 600 })(({ mobile }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minWidth: !mobile ? 475 : undefined,
      flex: 1,
      paddingTop: 15,
      marginLeft: !mobile ? 20 : undefined,
      marginRight: !mobile ? 20 : undefined,
    }}
  >
    <h2>What is it Robintrack?</h2>
    <p>
      Robintrack keeps track of how many <a href="https://robinhood.com/">Robinhood</a> users hold a particular stock
      over time. It generates charts showing the relationship between price and popularity, and compiles some lists
      using the data.
    </p>

    <h2 style={{ paddingTop: 10 }}>What can it do?</h2>
    <p>
      One of the most useful things that you can do with the data that this site provides is to figure out how people
      are reacting to moves in the market. Depending on if people are buying the dip, getting onboard during a pump
      because they think it&#39;s going to go higher, or taking profits, this data lets you observe each of those
      different situations and plan your own trading accordingly.
    </p>
  </div>
));

const ExampleImage = withMobileProp({ maxDeviceWidth: 600 })(({ src, alt, caption, url, mobile }) => (
  <div style={{ ...styles.exampleImage, minWidth: mobile ? 250 : 400 }}>
    <Link to={url}>
      <img src={src} alt={alt} style={{ minWidth: 250, maxWidth: mobile ? '90vw' : 400 }} />
    </Link>
    <center>{caption}</center>
  </div>
));

const Info = () => (
  <div style={{ marginTop: 10, paddingBottom: 10 }}>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
      <ExampleImage
        src="/images/buying_the_dip.jpg"
        alt="A chart showing the price vs popularity of Starbucks stock ($SBUX) while traders buy the dip during a drop in price."
        url="/symbol/SBUX"
        caption={
          <>
            {'Traders buying the dip in '}
            <Link to="/symbol/SBUX">SBUX</Link>
          </>
        }
      />
      <ExampleImage
        src="/images/taking_profits.jpg"
        alt="A chart showing the price vs popularity of AMD stock ($AMD) while traders take profits during a rise in price."
        url="/symbol/AMD"
        caption={
          <>
            {'Traders taking profits during a run-up in '}
            <Link to="/symbol/AMD">AMD</Link>
          </>
        }
      />
      <ExampleImage
        src="/images/fomo.jpg"
        alt="A chart showing the price vs popularity of iQIYI inc. stock ($IQ) while traders greed out and keep buying more and more as the price continues to rise."
        url="/symbol/IQ"
        caption={
          <>
            {'Traders going full FOMO on '}
            <Link to="/symbol/IQ">IQ</Link>
          </>
        }
      />
    </div>

    <h2>How it works</h2>
    <p>
      Every hour, the price and popularity for every stock on Robinhood is downloaded from the Robinhood API and stored.
      By combining all of these data points together, it&#39;s possible to view trends and analyze the ways in which
      they both change with respect to each other and over time.
    </p>

    <h2>About the Ads</h2>
    <p>
      Ads displayed on the site are sponsored by Defiance ETFs, providers of the $FIVG ETF. For more information about
      $FIVG, check out their website: <a href="https://www.defianceetfs.com?utm_source=robintrack">defianceetfs.com</a>
    </p>

    <span style={styles.disclaimer}>
      This site is for informational purposes only. It is not intended to serve as investment advice. Robintrack is not
      affiliated with Robinhood in any way, but all popularity data is sourced from Robinhood directly via a public API.
    </span>
  </div>
);

const Home = ({ mobile }) => (
  <div style={{ backgroundColor, display: 'flex', flexDirection: 'column', fontSize: 16.5 }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #333',
        }}
      >
        {mobile ? (
          <iframe
            style={{ marginRight: 'auto', marginLeft: 'auto', border: 'none' }}
            src="/fivg/300_250.html"
            width={300}
            height={250}
          />
        ) : null}

        <img src="/images/robintrack_logo.svg" style={styles.logo} alt={ROBINTRACK_LOGO_ALT} />
      </div>

      <About />
    </div>
    <Info />
  </div>
);

export default withMobileProp({ maxDeviceWidth: 840 })(Home);
