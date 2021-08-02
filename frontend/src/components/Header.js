import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { Button, Callout, Menu, Popover, Position } from '@blueprintjs/core';
import MediaQuery from 'react-responsive';
import * as R from 'ramda';

import FeedbackButton from 'src/components/FeedbackButton';
import { setSymbolSearchContent } from 'src/actions/symbolSearch';
import { backgroundColor, fontColor, emphasis } from 'src/style';
import { withMobileProp } from 'src/components/ResponsiveHelpers';
import { ROBINTRACK_LOGO_ALT } from 'src/constants';
import { isInViewport } from 'src/util';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ pathname });

const styles = {
  desktopHeader: {
    backgroundColor,
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerItem: {
    display: 'flex',
    padding: 15,
    alignItems: 'flex-end',
  },
  text: {
    color: fontColor,
    fontWeight: 'bold',
  },
  searchWrapper: {
    display: 'flex',
    flexBasis: 250,
    alignItems: 'flex-end',
    paddingBottom: 20,
    right: 0,
    justifyContent: 'flex-end',
  },
  searchInput: {
    backgroundColor: '#26262d',
  },
  mobileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
};

const HeaderItem = compose(
  connect(mapStateToProps),
  withMobileProp({ maxDeviceWidth: 1200 })
)(({ content, url, pathname, style = {}, textStyle = {}, onItemSelect, mobile }) => {
  const aggregateStyle = R.mergeAll([styles.text, { color: pathname === url ? fontColor : emphasis }, textStyle]);
  const inner = <span style={aggregateStyle}>{content}</span>;

  return (
    <div style={R.mergeAll([styles.headerItem, mobile ? { fontSize: 16 } : { fontSize: 'max(1.48vw, 18px)' }, style])}>
      {url && url !== pathname ? (
        <Link to={url} style={textStyle} onClick={onItemSelect}>
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  );
});

const mapSymbolSearchStateToProps = ({ symbolSearch }) => ({
  searchContent: symbolSearch,
});

const SymbolSearch = connect(mapSymbolSearchStateToProps, {
  setSymbolSearchContent,
  push,
})(({ logoShown = true, searchContent, setSymbolSearchContent, push }) => {
  const submitSymbolSearch = () => push(`/symbol/${searchContent}`);

  return (
    <div
      style={{
        ...styles.searchWrapper,
        alignItems: logoShown ? 'center' : 'flex-end',
      }}
    >
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search" />
        <input
          className="bp3-input"
          type="search"
          placeholder="Search Stock"
          dir="auto"
          onChange={e => setSymbolSearchContent(e.target.value.trim())}
          size={14}
          value={searchContent}
          style={styles.searchInput}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              submitSymbolSearch();
              e.target.blur();
            }
          }}
          onFocus={e => e.target.select()}
        />
        <Button minimal icon="arrow-right" onClick={submitSymbolSearch} />
      </div>
    </div>
  );
});

export const headerItems = [
  { content: 'Home', url: '/' },
  { content: 'Leaderboard', url: '/leaderboard' },
  { content: 'Popularity Changes', url: '/popularity_changes' },
  {
    content: <FeedbackButton />,
    textStyle: { cursor: 'pointer' },
  },
  {
    content: 'Retail Trading Barometer',
    url: '/barometer',
  },
  { content: 'Data Download', url: '/data-download' },
];

const MobileNavMenu = ({ onItemSelect }) => (
  <Menu>
    {headerItems.map(({ textStyle, ...props }, i) => (
      <HeaderItem
        key={i}
        style={{ padding: 2 }}
        textStyle={{ ...textStyle, fontSize: 20 }}
        onItemSelect={onItemSelect}
        {...props}
      />
    ))}
  </Menu>
);

const MobileHeader = ({ showLogo, setIframeRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav style={styles.mobileHeader}>
        {showLogo ? (
          <Link to="/">
            <img
              src="/images/robintrack_logo.svg"
              style={{ height: 70, width: 70, marginRight: 10, marginTop: -15 }}
              alt={ROBINTRACK_LOGO_ALT}
            />
          </Link>
        ) : null}
        <Popover
          content={<MobileNavMenu onItemSelect={() => setMenuOpen(false)} />}
          position={Position.LEFT_TOP}
          isOpen={menuOpen}
          onInteraction={isOpen => setMenuOpen(isOpen)}
        >
          <Button icon="menu" text="" />
        </Popover>

        <SymbolSearch />
      </nav>
    </div>
  );
};

const DesktopHeader = ({ showLogo, setIframeRef }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <nav style={styles.desktopHeader}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {showLogo ? (
          <Link to="/">
            <img
              src="/images/robintrack_logo.svg"
              style={{ height: 115, width: 115, marginRight: 15 }}
              alt={ROBINTRACK_LOGO_ALT}
            />
          </Link>
        ) : null}

        {headerItems.map((props, i) => (
          <HeaderItem key={i} {...props} />
        ))}
      </div>

      <SymbolSearch logoShown={showLogo} />
    </nav>
  </div>
);

const ApiShutdownWarning = withMobileProp({ maxDeviceWidth: 600 })(({ mobile }) => (
  <Callout intent="warning" style={{ fontSize: mobile ? 12 : 17, marginBottom: mobile ? 10 : undefined }}>
    As of August 2020, Robinhood has{' '}
    <a
      style={{ color: 'white', textDecoration: 'underline' }}
      href="https://www.bloomberg.com/news/articles/2020-08-08/robintrack-chronicler-of-day-trader-stock-demand-to-shut-down"
    >
      shut down the API
    </a>{' '}
    that Robintrack used to collect popularity data. As a result, the leaderboard page and popularity changes pages will
    no longer show data, and no updated data will be shown for any assets.
    <br />
    <br />
    Robinhood has indicated their interest in bringing back the data in some form at some point in the future, but no
    details have been shared. Until that time, the site will remain as-is with all previously collected data. The full
    database is still available for download via the Data Download page.
  </Callout>
));

const HeaderInner = ({ showLogo }) => {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    if (!iframeRef) {
      return;
    }

    const intervalHandle = setInterval(function () {
      if (!iframeRef || !iframeRef.contentWindow) {
        return;
      }
      if (isInViewport(iframeRef)) {
        iframeRef.contentWindow.postMessage(true, '*');
      } else {
        iframeRef.contentWindow.postMessage(false, '*');
      }
    }, 100);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [iframeRef]);

  return (
    <>
      <MediaQuery maxDeviceWidth={840}>
        <MobileHeader showLogo={showLogo} setIframeRef={setIframeRef} />
      </MediaQuery>

      <MediaQuery minDeviceWidth={841}>
        <DesktopHeader showLogo={showLogo} setIframeRef={setIframeRef} />
      </MediaQuery>
      <ApiShutdownWarning />
    </>
  );
};

const Header = connect(({ router: { location: { pathname } } }) => ({
  showLogo: pathname !== '/',
}))(HeaderInner);

export default Header;
