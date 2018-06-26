/**
 * Invisible component that keeps track of the current virtual URL and fires off Google Analytics
 * events when it changes.
 */

import { Component } from 'react';
import { connect } from 'react-redux';

class PageTracker extends Component {
  componentDidUpdate = prevProps => {
    const curPath = this.props.path;
    if (prevProps.path !== this.props.path) {
      window.ga('set', 'page', curPath);
      window.ga('send', 'pageview');
    }
  };

  render = () => null;
}

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ path: pathname });

export default connect(mapStateToProps)(PageTracker);
