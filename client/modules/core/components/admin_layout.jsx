import React from 'react';
import AppBar from 'material-ui/AppBar';

import MaterialUiContainer from './material-ui-container';
import AdminNavBar from '../containers/admin_navbar';

const AdminLayout = ({ content = () => null }) => (
  <MaterialUiContainer>
    <div className="admin-container">
      <header className="header">
        <AppBar title="Visa&Travel" showMenuIconButton={false} />
        <AdminNavBar />
      </header>
      <div className="content-wrapper">
        <div className="content">{content()}</div>
      </div>
    </div>
  </MaterialUiContainer>
);

AdminLayout.propTypes = {
  content: React.PropTypes.func,
};

export default AdminLayout;
