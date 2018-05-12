import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

import FeedbackButton from 'src/components/FeedbackButton';
import { setSymbolSearchContent } from 'src/actions/symbolSearch';
import { backgroundColor, fontColor, emphasis } from 'src/style';

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
  headerItem: { display: 'flex', padding: 20, alignItems: 'flex-end' },
  text: {
    fontSize: 30,
    color: fontColor,
    fontWeight: 'bold',
  },
  searchWrapper: {
    display: 'flex',
    flexBasis: 300,
    alignItems: 'flex-end',
    paddingBottom: 20,
    right: 0,
    justifyContent: 'flex-end',
  },
};

const HeaderItem = connect(mapStateToProps)(
  ({ content, url, pathname, style = {}, textStyle = {} }) => (
    <div style={{ ...styles.headerItem, ...style }}>
      {pathname === url || !url ? (
        <span style={{ ...styles.text, ...textStyle }}>{content}</span>
      ) : (
        <Link to={url} style={{ fontSize: 26 }}>
          <span style={{ ...styles.text, color: emphasis }}>{content}</span>
        </Link>
      )}
    </div>
  )
);

const items = [
  { content: 'Home', url: '/' },
  { content: 'Leaderboard', url: '/leaderboard' },
  { content: 'Popularity Changes', url: '/popularity_changes' },
  {
    content: <FeedbackButton />,
    style: { paddingLeft: 10, paddingBottom: 20 },
    textStyle: { fontSize: 20, color: emphasis, cursor: 'pointer' },
  },
];

const Header = ({ searchContent, setSymbolSearchContent, push }) => (
  <div style={styles.root}>
    <div style={{ display: 'flex' }}>
      {items.map((props, i) => <HeaderItem key={i} {...props} />)}
    </div>

    <div style={styles.searchWrapper}>
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-search" />
        <input
          className="pt-input"
          type="search"
          placeholder="Search Stock"
          dir="auto"
          onChange={e => setSymbolSearchContent(e.target.value)}
          size={12}
          value={searchContent}
        />
      </div>
      <Button
        onClick={() => push(`/symbol/${searchContent}`)}
        small
        style={{ height: 30 }}
      >
        Search
      </Button>
    </div>
  </div>
);

export default connect(
  ({ symbolSearch }) => ({ searchContent: symbolSearch }),
  { setSymbolSearchContent, push }
)(Header);
