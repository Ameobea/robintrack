import React, { useState } from 'react';

import BarometerTimeseries from './Timeseries';
import './index.scss';
import DayDetails from './DayDetails';
import { withMobileProp } from 'src/components/ResponsiveHelpers';

const Barometer: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const [selectedDayID, setSelectedDayID] = useState<string | null>(null);

  return (
    <div className="barometer">
      {mobile ? <h1 style={{ textAlign: 'center' }}>Retail Trading Barometer</h1> : null}
      <BarometerTimeseries onDaySelect={setSelectedDayID} />

      <div className="day-details">
        {selectedDayID ? (
          <DayDetails dayID={selectedDayID} />
        ) : (
          <div style={{ textAlign: 'center', fontSize: mobile ? 18 : 22, fontStyle: 'italic' }}>
            Click/tap a bar or point on the chart above to display details about the assets which changed the most in
            popularity for that day
          </div>
        )}
      </div>

      <hr />
      <h2 style={{ textAlign: 'center' }}>What Does This Show?</h2>
      <p>
        The above chart shows the <b>aggregate absolute change</b> in number of users holding all trackable assets on
        Robinhood for each day (pink) vs. the price of the S&amp;P500 ETF $SPY (green). For each asset, the number of
        users holding at the beginning and the end of the day is recorded and the absolute difference between them is
        recorded. Then, all of those absolute differences are added together to produce the value for the pink bars.
      </p>
      <p>
        This number can serve as a proxy for the overall amount of trading activity on Robinhood overall; the higher the
        total absolute change in popularity is, the more users are entering and exiting positions. Keep in mind that
        this data is limited in a few ways: It only shows when users buy shares after holding none rather than when they
        add shares to existing positions, it doesn&apos;t show when users open a position at the start of the day and
        then fully close it before market close, etc. Also, it is heavily influenced by the number of new Robinhood
        accounts by either making their first trades or receiving free shares as part of the referral program.
      </p>
    </div>
  );
};

export default withMobileProp({ maxDeviceWidth: 800 })(Barometer);
