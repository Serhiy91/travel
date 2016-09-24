import React from 'react';
import MaterialUiContainer from './material-ui-container';

const MainLayout = ({ content = () => null }) => (
  <MaterialUiContainer>
    <div>
      {content()}
    </div>
  </MaterialUiContainer>
);

MainLayout.propTypes = {
  content: React.PropTypes.func,
};

export default MainLayout;
