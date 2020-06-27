/**
 * Invisible component that keeps track of the current virtual URL and fires off Google Analytics
 * events when it changes.
 */

import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const symbolPageRegex = /\/symbol\/(.+)/;

/**
 * If we're currently on a symbol details page, check to see if the symbol is lowercase.  If it
 * is, push a new path where the symbol is capitalized instead.
 */
const checkSymbolPage = path => {
  const match = symbolPageRegex.exec(path);
  if (!match) {
    return false;
  }

  const uppercaseSymbol = match[1].toUpperCase();
  if (uppercaseSymbol !== match[1]) {
    return uppercaseSymbol;
  }
};

const sendGa = curPath => {
  let tracker = typeof window?.ga?.getAll === 'function' ? window.ga.getAll() : null;
  if (Array.isArray(tracker)) {
    tracker = tracker[0];
  } else {
    tracker = null;
  }
  if (!tracker) {
    return;
  }
  tracker.set('page', curPath);
  tracker.send('pageview');
};

class PageTracker extends Component {
  checkLowercaseSymbol = () => {
    const { path: curPath, push } = this.props;

    const newPath = checkSymbolPage(curPath);
    if (newPath) {
      push(newPath);
      return true;
    } else {
      return false;
    }
  };

  componentDidMount = this.checkLowercaseSymbol;

  componentDidUpdate = prevProps => {
    const curPath = this.props.path;
    if (this.checkLowercaseSymbol()) {
      return;
    }

    if (prevProps.path !== this.props.path) {
      sendGa(curPath);
    }
  };

  render = () => null;
}

const mapStateToProps = ({
  router: {
    location: { pathname },
  },
}) => ({ path: pathname });

export default connect(mapStateToProps, { push })(PageTracker);
