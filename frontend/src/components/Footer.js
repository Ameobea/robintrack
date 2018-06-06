import React from 'react';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 12,
    borderTop: '1px solid rgb(87, 86, 86)',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
};

const FooterItem = ({ children, flex = 1 }) => (
  <div style={{ ...styles.item, flex }}>{children}</div>
);

const Footer = () => (
  <div style={styles.root}>
    <FooterItem>
      Robintrack by <br />
      <a href="https://ameobea.me/">Ameo / Casey Primozic</a>
    </FooterItem>

    <FooterItem flex={0.5}>&copy;{new Date().getFullYear()}</FooterItem>

    <FooterItem flex={0.7}>
      <a href="https://github.com/ameobea/robintrack">Source Code</a>
    </FooterItem>
  </div>
);

export default Footer;
