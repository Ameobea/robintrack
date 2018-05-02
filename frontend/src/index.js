import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history, store } from 'src/reducers';
import Home from 'src/screens/Home';
import Leaderboard from 'src/screens/Leaderboard';
import SymbolDetails from 'src/screens/SymbolDetails';

const ConnectedSwitch = connect(({ router: { location } }) => ({
  location,
}))(Switch);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedSwitch>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/symbol/:symbol" component={SymbolDetails} />
      </ConnectedSwitch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
