import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, Alignment } from '@blueprintjs/core';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import numeral from 'numeral';

import {
  requestPopularityHistory,
  requestQuoteHistory,
  requestQuote,
  fetchPopularityRanking,
  fetchNeighborRankingSymbols,
  requestTotalSymbols,
} from 'src/actions/api';
import Loading from 'src/components/Loading';
import { withMobileOrDesktop } from 'src/components/ResponsiveHelpers';

const PopularityChart = React.lazy(() => import('src/components/PopularityChart'));

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#16161d',
    color: '#e3e3e3',
  },
  navigationHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  navigationHeaderItem: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  mobileNavigationHeader: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20,
    alignItems: 'center',
  },
  notFound: { textAlign: 'center' },
};

const NavigationHeaderItem = ({ style = {}, children }) => (
  <div style={R.merge(styles.navigationHeaderItem, style)}>{children}</div>
);

const DesktopPagerLink = ({ symbol, popularityRanking, isLoading, isRight = false }) => {
  let content;
  if (!symbol || popularityRanking <= 0) {
    if (isLoading) {
      content = <h1>Loading...</h1>;
    } else {
      content = null;
    }
  } else {
    const text = `#${popularityRanking}: ${symbol}`;
    content = (
      <h1>
        <Link to={`/symbol/${symbol}`}>{text}</Link>
      </h1>
    );
  }

  return (
    <NavigationHeaderItem style={{ justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
      {content}
    </NavigationHeaderItem>
  );
};

const formatPrice = price => numeral(price).format('$1,000.00');

const Title = ({ popularityRanking, symbol, bid, ask, name, fullName }) => (
  <h1>
    <center>
      {popularityRanking ? `#${popularityRanking}: ` : null}
      <u>{symbol}</u>
      {' - '}
      <span title={fullName}>{name}</span>
      <br />
      {!!bid && !!ask ? `${formatPrice(bid)} - ${formatPrice(ask)}` : 'Loading...'}
    </center>
  </h1>
);

const DesktopNavigationHeader = ({ nextLeastPopular, nextMostPopular, isLoading, ...props }) => (
  <div style={styles.navigationHeader}>
    <DesktopPagerLink
      symbol={nextLeastPopular}
      popularityRanking={props.popularityRanking - 1}
      isLoading={isLoading}
    />

    <NavigationHeaderItem style={{ flex: 3 }}>
      <Title {...props} />
    </NavigationHeaderItem>

    <DesktopPagerLink
      symbol={nextMostPopular}
      popularityRanking={props.popularityRanking + 1}
      isLoading={isLoading}
      isRight
    />
  </div>
);

const MobilePagerLink = connect(
  undefined,
  { push }
)(({ symbol, popularityRanking, isLoading, isRight = false, push }) => {
  const text = isLoading ? 'Loading...' : `#${popularityRanking}: ${symbol}`;

  return (
    <Button
      disabled={popularityRanking === 0}
      text={popularityRanking === 0 ? '' : <div style={{ fontSize: 12 }}>{text}</div>}
      icon={!isRight ? 'chevron-left' : undefined}
      rightIcon={isRight ? 'chevron-right' : undefined}
      onClick={() => !isLoading && push(`/symbol/${symbol}`)}
    />
  );
});

const MobileNavigationHeader = ({
  nextLeastPopular,
  nextMostPopular,
  isLoading,
  symbol,
  popularityRanking,
  bid,
  ask,
  name,
  fullName,
}) => (
  <div style={styles.mobileNavigationHeader}>
    <h2>{name ? `${symbol} - ${name}` : symbol}</h2>
    <ButtonGroup alignText={Alignment.CENTER} style={{ paddingBottom: 10 }}>
      <MobilePagerLink
        symbol={nextLeastPopular}
        popularityRanking={popularityRanking - 1}
        isLoading={isLoading}
      />

      <MobilePagerLink
        symbol={nextMostPopular}
        popularityRanking={popularityRanking + 1}
        isLoading={isLoading}
        isRight
      />
    </ButtonGroup>

    <span style={{ paddingTop: 5, fontSize: 16 }}>
      {bid && ask ? `$${bid} - $${ask}` : 'Loading...'}
    </span>
  </div>
);

const NavigationHeader = withMobileOrDesktop({ maxDeviceWidth: 800 })(
  MobileNavigationHeader,
  DesktopNavigationHeader
);

const SymbolNotFound = ({ symbol }) => (
  <div style={styles.notFound}>
    <h1>Symbol Not Found</h1>
    You may have mis-typed it, or the symbol may have been delisted.
  </div>
);

class SymbolDetails extends Component {
  requestData = ({
    symbol,
    requestQuote,
    requestPopularityHistory,
    requestQuoteHistory,
    fetchPopularityRanking,
    fetchNeighborRankingSymbols,
    popularityRanking,
    requestTotalSymbols,
  }) => {
    requestTotalSymbols();
    requestQuote(symbol);
    requestPopularityHistory(symbol);
    requestQuoteHistory(symbol);
    fetchPopularityRanking(symbol);
    popularityRanking && fetchNeighborRankingSymbols(popularityRanking);
  };

  componentDidMount = () => this.requestData(this.props);

  componentDidUpdate = oldProps => {
    if (oldProps.symbol !== this.props.symbol) {
      this.requestData(this.props);
    }

    const popularityRanking = this.props.popularityRanking;
    if (!oldProps.popularityRanking && popularityRanking !== undefined) {
      this.props.fetchNeighborRankingSymbols(popularityRanking);
    }
  };

  render = () => {
    const { symbol, popularityHistory, quoteHistory, quotes, notFound, ...props } = this.props;

    if (notFound) {
      return <SymbolNotFound symbol={symbol} />;
    }

    const isLoading = R.any(R.isNil, [
      quotes[symbol],
      popularityHistory[symbol],
      quoteHistory[symbol],
      props.nextMostPopular !== undefined || props.popularityRanking === props.totalSymbols,
      props.nextLeastPopular !== undefined || props.popularityRanking === 1,
    ]);

    const { bid, ask, name: fullName, simple_name: name } = quotes[symbol] || {};

    return (
      <div style={styles.root}>
        <NavigationHeader
          symbol={symbol}
          bid={bid}
          ask={ask}
          name={name}
          fullName={fullName}
          isLoading={isLoading}
          {...props}
        />

        <Suspense fallback={<Loading />}>
          <PopularityChart
            symbol={symbol}
            quoteHistory={quoteHistory[symbol]}
            popularityHistory={popularityHistory[symbol]}
          />
        </Suspense>
      </div>
    );
  };
}

const mapStateToProps = (
  {
    api: {
      quotes,
      popularityHistory,
      quoteHistory,
      popularityMapping,
      symbolPopularities,
      notFound,
      totalSymbols,
    },
  },
  {
    match: {
      params: { symbol },
    },
  }
) => {
  const popularityRanking = symbolPopularities[symbol];

  return {
    symbol,
    quotes,
    popularityHistory,
    quoteHistory,
    popularityRanking,
    totalSymbols,
    nextLeastPopular: R.prop('symbol', popularityMapping[popularityRanking - 1]),
    nextMostPopular: R.prop('symbol', popularityMapping[popularityRanking + 1]),
    notFound: notFound.has(symbol),
  };
};

export default connect(
  mapStateToProps,
  {
    requestQuote,
    requestPopularityHistory,
    requestQuoteHistory,
    fetchPopularityRanking,
    fetchNeighborRankingSymbols,
    requestTotalSymbols,
  }
)(SymbolDetails);
