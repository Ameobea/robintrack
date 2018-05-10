import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FeedbackButton from 'src/components/FeedbackButton';
import { backgroundColor, fontColor, emphasis } from 'src/style';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ pathname });

const styles = {
  headerItem: { display: 'flex', padding: 20, alignItems: 'flex-end' },
  text: {
    fontSize: 30,
    color: fontColor,
    fontWeight: 'bold',
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
    style: { paddingLeft: 10 },
    textStyle: { fontSize: 20, color: emphasis, cursor: 'pointer' },
  },
];

const Header = () => (
  <div style={{ backgroundColor, display: 'flex', flexDirection: 'row' }}>
    {items.map((props, i) => <HeaderItem key={i} {...props} />)}
  </div>
);

export default Header;
