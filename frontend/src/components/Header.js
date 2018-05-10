import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { backgroundColor, fontColor } from 'src/style';

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ pathname });

const textStyle = {
  fontSize: 26,
  color: fontColor,
};

const HeaderItem = connect(mapStateToProps)(({ content, url, pathname }) => (
  <div style={{ paddingLeft: 20, paddingRight: 20 }}>
    {pathname === url ? (
      <span style={textStyle}>{content}</span>
    ) : (
      <Link to={url} style={{ fontSize: 26 }}>
        {content}
      </Link>
    )}
  </div>
));

const items = [
  { content: 'Home', url: '/' },
  { content: 'Leaderboard', url: '/leaderboard' },
  { content: 'Popularity Changes', url: '/popularity_changes' },
];

const Header = () => (
  <div style={{ backgroundColor, display: 'flex', flexDirection: 'row' }}>
    {items.map((props, i) => <HeaderItem key={i} {...props} />)}
  </div>
);

export default Header;
