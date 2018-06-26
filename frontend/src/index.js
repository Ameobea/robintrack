import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import 'react-virtualized/styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import { history, store } from 'src/reducers';
import Home from 'src/screens/Home';
import Leaderboard from 'src/screens/Leaderboard';
import SymbolDetails from 'src/screens/SymbolDetails';
import Header from 'src/components/Header';
import { backgroundColor } from 'src/style';
import PopularityChanges from 'src/screens/PopularityChanges';
import Footer from 'src/components/Footer';
import PageTracker from 'src/components/PageTracker';

const ConnectedSwitch = connect(({ router: { location } }) => ({
  location,
}))(Switch);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{ height: '100%', backgroundColor }} className="pt-dark">
        <PageTracker />
        <Header />

        <ConnectedSwitch>
          <Route exact path="/" component={Home} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/symbol/:symbol" component={SymbolDetails} />
          <Route path="/popularity_changes" component={PopularityChanges} />
        </ConnectedSwitch>

        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
