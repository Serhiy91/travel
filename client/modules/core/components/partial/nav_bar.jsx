import React, { PropTypes } from 'react';
import MainMenu from './main_menu';
import MainTabMenu from './main_tab_menu';
import LandingMenu from './landing_menu';

const NavBar = (props) => {
  const { currentRoute } = props;
  const isLandingPage = currentRoute === 'landing';
  return (
    <div className="nav-bar">
      <div className="hidden-sm hidden-xs">
        {isLandingPage ? <LandingMenu {...props} /> : <MainMenu {...props} />}
      </div>
      <div className="visible-sm visible-xs">
        <MainTabMenu {...props} />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  currentRoute: PropTypes.string,
};

export default NavBar;
