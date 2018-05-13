import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import numeral from 'numeral';

import {
  requestPopularityHistory,
  requestQuoteHistory,
  requestQuote,
  fetchPopularityRanking,
  fetchNeighborRankingSymbols,
} from 'src/actions/api';
import PopularityChart from 'src/components/PopularityChart';

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
};

const NavigationHeaderItem = ({ style = {}, children }) => (
  <div style={R.merge(styles.navigationHeaderItem, style)}>{children}</div>
);

const PagerLink = ({
  symbol,
  popularityRanking,
  isLoading,
  isRight = false,
}) => {
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
    <NavigationHeaderItem
      style={{ justifyContent: isRight ? 'flex-end' : 'flex-start' }}
    >
      {content}
    </NavigationHeaderItem>
  );
};

const formatPrice = price => numeral(price).format('$0.00');

const Title = ({ popularityRanking, symbol, bid, ask }) => (
  <h1>
    <center>
      {popularityRanking ? `#${popularityRanking}: ` : null}
      <u>{symbol}</u>
      <br />
      {!!bid && !!ask
        ? `${formatPrice(bid)} - ${formatPrice(ask)}`
        : 'Loading...'}
    </center>
  </h1>
);

const NavigationHeader = ({
  nextLeastPopular,
  nextMostPopular,
  isLoading,
  ...props
}) => (
  <div style={styles.navigationHeader}>
    <PagerLink
      symbol={nextLeastPopular}
      popularityRanking={props.popularityRanking - 1}
      isLoading={isLoading}
    />

    <NavigationHeaderItem>
      <Title {...props} />
    </NavigationHeaderItem>

    <PagerLink
      symbol={nextMostPopular}
      popularityRanking={props.popularityRanking + 1}
      isLoading={isLoading}
      isRight
    />
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
  }) => {
    requestQuote(symbol);
    requestPopularityHistory(symbol);
    requestQuoteHistory(symbol);
    fetchPopularityRanking(symbol);
    popularityRanking && fetchNeighborRankingSymbols(popularityRanking);
  };

  componentDidMount = () => this.requestData(this.props);

  componentDidUpdate = () => this.requestData(this.props);

  render = () => {
    const {
      symbol,
      popularityHistory,
      quoteHistory,
      quotes,
      ...props
    } = this.props;

    const isLoading = R.any(R.not, [
      quotes[symbol],
      popularityHistory[symbol],
      quoteHistory[symbol],
    ]);

    const bid = R.path([symbol, 'bid'], quotes);
    const ask = R.path([symbol, 'ask'], quotes);

    return (
      <div style={styles.root}>
        <NavigationHeader
          symbol={symbol}
          bid={bid}
          ask={ask}
          isLoading={isLoading}
          {...props}
        />

        <PopularityChart
          symbol={symbol}
          quoteHistory={quoteHistory[symbol]}
          popularityHistory={popularityHistory[symbol]}
        />
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
    nextLeastPopular: R.prop(
      'symbol',
      popularityMapping[popularityRanking - 1]
    ),
    nextMostPopular: R.prop('symbol', popularityMapping[popularityRanking + 1]),
  };
};

export default connect(mapStateToProps, {
  requestQuote,
  requestPopularityHistory,
  requestQuoteHistory,
  fetchPopularityRanking,
  fetchNeighborRankingSymbols,
})(SymbolDetails);
