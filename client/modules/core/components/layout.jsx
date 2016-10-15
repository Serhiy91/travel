import React from 'react';
import MaterialUiContainer from './material-ui-container';
import MainTabMenu from '../containers/main_tab_menu';

const MainLayout = ({ content = () => null }) => (
  <MaterialUiContainer>
    <div className="main-layout">
      <header>
        <MainTabMenu />
      </header>
      <div>
        {content()}
      </div>
    </div>
  </MaterialUiContainer>
);

MainLayout.propTypes = {
  content: React.PropTypes.func,
};

export default MainLayout;
