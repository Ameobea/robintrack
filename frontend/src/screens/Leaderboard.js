import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import * as R from 'ramda';

import { requestBottomSymbols, requestTopSymbols } from 'src/actions/api';
import { fontColor, backgroundColor } from 'src/style';
import Loading from 'src/components/Loading';
import { emphasis, emphasisDarker } from 'src/style';

const textStyle = {
  fontSize: 24,
};

const SymbolTableCell = ({ style = {}, children }) => (
  <div style={{ display: 'flex', flex: 1, ...textStyle, ...style }}>
    {children}
  </div>
);

const pagerLinkStyle = {
  color: emphasis,
  cursor: 'pointer',
  fontSize: 26,
};

const SymbolTablePager = ({
  curPage,
  hasNextPage = true,
  onPageBack,
  onPageForward,
}) => (
  <div>
    {curPage > 0 && (
      <span onClick={onPageBack} style={pagerLinkStyle}>
        {'<'}
      </span>
    )}
    <span
      style={{ fontSize: 24, color: emphasisDarker }}
    >{` ${curPage} `}</span>
    {hasNextPage && (
      <span onClick={onPageForward} style={pagerLinkStyle}>
        {'>'}
      </span>
    )}
  </div>
);

const SymbolTableRow = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
    }}
  >
    {children}
  </div>
);

const SymbolTable = ({
  pageSize,
  label,
  data,
  style,
  page,
  onPageBack,
  onPageForward,
}) => (
  <div style={{ paddingLeft: 20, paddingRight: 20, ...style }}>
    <div
      style={{
        width: '80vw',
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        color: fontColor,
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: 34, fontWeight: 'bold' }}>
        {label}
      </h2>

      {data.map(({ symbol, popularity }, i) => (
        <SymbolTableRow key={i}>
          <SymbolTableCell style={{ flex: 0.5 }}>
            {page * pageSize + i + 1}
          </SymbolTableCell>
          <SymbolTableCell>
            <Link to={`/symbol/${symbol}`}>
              {<span style={textStyle}>{symbol}</span>}
            </Link>
          </SymbolTableCell>
          <SymbolTableCell>{numeral(popularity).format('0,0')}</SymbolTableCell>
        </SymbolTableRow>
      ))}

      {R.isEmpty(data) && (
        <SymbolTableRow>
          <SymbolTableCell>Loading...</SymbolTableCell>
        </SymbolTableRow>
      )}
      {R.range(data.length, pageSize - (R.isEmpty(data) ? 1 : 0)).map(i => (
        <SymbolTableRow key={i}>
          <SymbolTableCell>
            <br />
          </SymbolTableCell>
        </SymbolTableRow>
      ))}

      {(page > 0 || data.length > 0) && (
        <center>
          <SymbolTablePager
            curPage={page}
            onPageBack={onPageBack}
            onPageForward={onPageForward}
          />
        </center>
      )}
    </div>
  </div>
);

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = { bottomSymbolsPage: 0, topSymbolsPage: 0 };
  }

  getBottomSymbolsData = () =>
    R.slice(
      this.state.bottomSymbolsPage * this.props.pageSize,
      this.state.bottomSymbolsPage * this.props.pageSize + this.props.pageSize,
      this.props.bottomSymbols
    );

  getTopSymbolsData = () =>
    R.slice(
      this.state.topSymbolsPage * this.props.pageSize,
      this.state.topSymbolsPage * this.props.pageSize + this.props.pageSize,
      this.props.topSymbols
    );

  pageTopSymbols = amount => {
    const newTopSymbolsPage = this.state.topSymbolsPage + amount;
    this.setState({ topSymbolsPage: newTopSymbolsPage });
    this.props.requestTopSymbols(
      this.props.pageSize,
      newTopSymbolsPage * this.props.pageSize
    );
    this.props.requestTopSymbols(
      this.props.pageSize,
      newTopSymbolsPage * this.props.pageSize + this.props.pageSize
    );
  };

  pageBottomSymbols = amount => {
    const newBottomSymbolsPage = this.state.bottomSymbolsPage + amount;
    this.setState({ bottomSymbolsPage: newBottomSymbolsPage });
    this.props.requestBottomSymbols(
      this.props.pageSize,
      newBottomSymbolsPage * this.props.pageSize
    );
    this.props.requestBottomSymbols(
      this.props.pageSize,
      newBottomSymbolsPage * this.props.pageSize + this.props.pageSize
    );
  };

  componentWillMount() {
    const { pageSize, requestBottomSymbols, requestTopSymbols } = this.props;

    if (R.isEmpty(this.getBottomSymbolsData())) {
      requestBottomSymbols(pageSize, this.state.bottomSymbolsPage * pageSize);
    }

    if (R.isEmpty(this.getTopSymbolsData())) {
      requestTopSymbols(pageSize, this.state.topSymbolsPage * pageSize);
    }
  }

  render = () => {
    if (!this.props.bottomSymbols || !this.props.topSymbols) {
      return <Loading />;
    }

    const symbolTableStyle = {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    };

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexWrap: 'wrap',
          paddingBottom: 50,
          backgroundColor,
        }}
      >
        <SymbolTable
          pageSize={this.props.pageSize}
          label="Most Popular Assets"
          data={this.getTopSymbolsData()}
          style={symbolTableStyle}
          page={this.state.topSymbolsPage}
          onPageForward={() => this.pageTopSymbols(1)}
          onPageBack={() => this.pageTopSymbols(-1)}
        />
        <SymbolTable
          pageSize={this.props.pageSize}
          label="Least Popular Assets"
          data={this.getBottomSymbolsData()}
          style={symbolTableStyle}
          page={this.state.bottomSymbolsPage}
          onPageForward={() => this.pageBottomSymbols(1)}
          onPageBack={() => this.pageBottomSymbols(-1)}
        />
      </div>
    );
  };
}

Leaderboard.defaultProps = {
  pageSize: 20,
};

const mapStateToProps = ({ api: { bottomSymbols, topSymbols } }) => ({
  bottomSymbols,
  topSymbols,
});

export default connect(mapStateToProps, {
  requestBottomSymbols,
  requestTopSymbols,
})(Leaderboard);
