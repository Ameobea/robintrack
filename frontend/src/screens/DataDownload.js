import React from 'react';

const styles = {
  root: {
    fontSize: 18,
    marginTop: 40,
    maxWidth: 1400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  downloadButtonWrapper: {
    textAlign: 'center',
    fontSize: 28,
    paddingTop: 28,
    paddingBottom: 30,
  },
  downloadButton: {
    backgroundColor: 'rgba(200,200,200,0.06)',
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: '1em',
  },
};

const DataDownload = () => (
  <div style={styles.root}>
    <h1>Full Robintrack Database Download</h1>
    <p>
      Every night, I export the full Robintrack database of popularity data to CSV. If you want to do more in-depth
      analysis that this site provides, use it as an input for automated trading systems or machine learning models, or
      anything else, you&apos;re more than welcome to use it for whatever you want. Timezones are in UTC.
    </p>

    <p>
      Robinhood provides this popularity data via their API for free to the world. This is a really great thing;
      it&apos;s a great move towards openness and transparency in an industry that&apos;s traditionally been very closed
      and secretive. I felt it was only right to make all Robintrack data public in the same way.
    </p>
    <p>
      <b>If you do end up doing something cool with the popularity data, please consider sharing it!</b>
    </p>
    <p>
      You&apos;re under no obligation to do so, but it would be really cool to see a collection of what people are doing
      with this data. If you do end up creating something neat with the data, please consider dropping me an email at{' '}
      <a href="mailto:me@ameo.link">me@ameo.link</a> or submitting it via the &quot;Issues and Feedback&quot; link at
      the top of the page. I&apos; put a link to what you made on this page, if you&apos;re ok with that.
    </p>

    <div style={styles.downloadButtonWrapper}>
      <a href="https://robintrack-data.ameo.design/robintrack-popularity-history.tar.gz" style={styles.downloadButton}>
        Download Full Robintrack Popularity History
      </a>
    </div>

    <p>
      I&apos;ve also uploaded the data set to{' '}
      <a href="https://www.kaggle.com/cprimozi/robinhood-stock-popularity-history">Kaggle</a> if you&apos;d prefer to
      use the ecosystem there to work with it.
    </p>
  </div>
);

export default DataDownload;
