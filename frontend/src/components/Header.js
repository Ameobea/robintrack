import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { Button, Menu, Popover, Position } from '@blueprintjs/core';
import MediaQuery from 'react-responsive';
import * as R from 'ramda';

import FeedbackButton from 'src/components/FeedbackButton';
import { setSymbolSearchContent } from 'src/actions/symbolSearch';
import { backgroundColor, fontColor, emphasis } from 'src/style';
import { withMobileProp } from 'src/components/ResponsiveHelpers';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ pathname });

const styles = {
  root: {
    backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerItem: { display: 'flex', padding: 15, alignItems: 'flex-end' },
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
)(
  ({
    content,
    url,
    pathname,
    style = {},
    textStyle = {},
    onItemSelect,
    mobile,
  }) => {
    const aggregateStyle = R.mergeAll([
      styles.text,
      { color: pathname === url ? fontColor : emphasis },
      textStyle,
    ]);
    const inner = <span style={aggregateStyle}>{content}</span>;

    return (
      <div
        style={R.mergeAll([
          styles.headerItem,
          mobile ? { fontSize: 16 } : { fontSize: 26 },
          style,
        ])}
      >
        {url && url !== pathname ? (
          <Link to={url} style={textStyle} onClick={onItemSelect}>
            {inner}
          </Link>
        ) : (
          inner
        )}
      </div>
    );
  }
);

const mapSymbolSearchStateToProps = ({ symbolSearch }) => ({
  searchContent: symbolSearch,
});

const SymbolSearch = connect(
  mapSymbolSearchStateToProps,
  {
    setSymbolSearchContent,
    push,
  }
)(({ searchContent, setSymbolSearchContent, push }) => {
  const submitSymbolSearch = () => push(`/symbol/${searchContent}`);

  return (
    <div style={styles.searchWrapper}>
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-search" />
        <input
          className="pt-input"
          type="search"
          placeholder="Search Stock"
          dir="auto"
          onChange={e => setSymbolSearchContent(e.target.value.trim())}
          size={12}
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

class Header extends Component {
  state = { menuOpen: false };

  render = () => (
    <Fragment>
      <MediaQuery maxDeviceWidth={840}>
        <div style={styles.mobileHeader}>
          <Popover
            content={
              <MobileNavMenu
                onItemSelect={() => this.setState({ menuOpen: false })}
              />
            }
            position={Position.LEFT_TOP}
            isOpen={this.state.menuOpen}
            onInteraction={menuOpen => this.setState({ menuOpen })}
          >
            <Button icon="menu" text="" />
          </Popover>

          <SymbolSearch />
        </div>
      </MediaQuery>

      <MediaQuery minDeviceWidth={841}>
        <div style={styles.root}>
          <div style={{ display: 'flex' }}>
            {headerItems.map((props, i) => <HeaderItem key={i} {...props} />)}
          </div>

          <SymbolSearch />
        </div>
      </MediaQuery>
    </Fragment>
  );
}

export default Header;
