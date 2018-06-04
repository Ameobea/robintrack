import React from 'react';
import MediaQuery from 'react-responsive';

export const ResponsiveStyler = ({ children, styler, ...props }) => (
  <MediaQuery {...props}>
    {matches => <div style={styler(matches)}>{children}</div>}
  </MediaQuery>
);

export const Responsive = ({ getProps, ...mediaQueryProps }) => Component => ({
  ...props
}) => (
  <MediaQuery {...mediaQueryProps}>
    {matches => <Component {...props} {...getProps(matches)} />}
  </MediaQuery>
);

export const withMobileProp = ({ ...mediaQueryProps }) => Component => ({
  ...props
}) => (
  <MediaQuery {...mediaQueryProps}>
    {mobile => <Component mobile={mobile} {...props} />}
  </MediaQuery>
);
