import React from 'react';

const MainLayout = ({ content = () => null }) => (
  <div>
    {content()}
  </div>
);

MainLayout.propTypes = {
  content: React.PropTypes.func,
};

export default MainLayout;
