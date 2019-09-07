import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import 'react-virtualized/styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import { history, store } from 'src/reducers';
import Header from 'src/components/Header';
import { backgroundColor } from 'src/style';
import Footer from 'src/components/Footer';
import PageTracker from 'src/components/PageTracker';
import Loading from 'src/components/Loading';

const Home = React.lazy(() => import('src/screens/Home'));
const Leaderboard = React.lazy(() => import('src/screens/Leaderboard'));
const SymbolDetails = React.lazy(() => import('src/screens/SymbolDetails'));
const PopularityChanges = React.lazy(() => import('src/screens/PopularityChanges'));
const DataDownload = React.lazy(() => import('src/screens/DataDownload'));

const RenderComponent = Comp => ({ ...props }) => <Comp {...props} />;

const ConnectedSwitch = connect(({ router: { location } }) => ({
  location,
}))(Switch);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{ height: '100%', backgroundColor }} className="bp3-dark">
        <PageTracker />
        <Header />

        <Suspense fallback={<Loading />}>
          <ConnectedSwitch>
            <Route exact path="/" component={RenderComponent(Home)} />
            <Route path="/leaderboard" component={RenderComponent(Leaderboard)} />
            <Route path="/symbol/:symbol" component={RenderComponent(SymbolDetails)} />
            <Route path="/popularity_changes" component={RenderComponent(PopularityChanges)} />
            <Route path="/data-download" component={RenderComponent(DataDownload)} />
          </ConnectedSwitch>
        </Suspense>

        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
