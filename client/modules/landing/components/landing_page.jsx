import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import T from '/lib/i18n';

import MainServices from './main_services';
import HotTours from '../containers/hot_tours';
import LastNews from '../containers/last_news';

const LandingPage = ({ goTo }) => (
  <div className="landing-page">
    <div className="landing-media">
      <div className="background-darken">
      </div>
    </div>
    <div className="landing-media-content">
      <div className="tours-content">
        <h1 className="app-title"><T>app_title</T></h1>
        <h4 className="app-description"><T>app_description</T></h4>
        <RaisedButton
          label={<T>search</T>}
          onTouchTap={() => goTo('tours')}
          secondary
        />
      </div>
    </div>
    <div className="landing-content">
      <div className="landing-paper-block">
        <MainServices />
        <HotTours />
        <LastNews />
      </div>
    </div>
    <div className="landing-footer muted">
      &#169; 2016 Visa&Travel
    </div>
  </div>
);

LandingPage.propTypes = {
  goTo: PropTypes.func,
};

export default LandingPage;