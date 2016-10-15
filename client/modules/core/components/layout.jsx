import React from 'react';
import MaterialUiContainer from './material-ui-container';
import NavBar from '../containers/nav_bar';

const MainLayout = ({ content = () => null }) => (
  <MaterialUiContainer>
    <div className="main-layout">
      <header>
        <NavBar />
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
