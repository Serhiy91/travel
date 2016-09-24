import React from 'react';
import MaterialUiContainer from './material-ui-container';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  drawer: {
    height: 'calc(100% - 64px)',
    top: '64px',
    zIndex: 1000,
  },
};

const AdminLayout = ({ content = () => null }) => (
  <MaterialUiContainer>
    <div className="admin-container">
      <header className="header">
        <AppBar title="Visa&Travel" showMenuIconButton={false} />
        <nav>
          <Drawer open containerStyle={styles.drawer}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </nav>
      </header>
      <div className="content">
        {content()}
      </div>
    </div>
  </MaterialUiContainer>
);

AdminLayout.propTypes = {
  content: React.PropTypes.func,
};

export default AdminLayout;
