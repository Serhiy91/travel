import React, { PropTypes } from 'react';

class AdminLayout extends React.Component {
  componentWillMount() {
    const { user, admin, goTo } = this.props;
    if (!user || admin && !user.isAdmin) {
      goTo('signIn');
    }
  }
  render() {
    return this.props.children;
  }
}

AdminLayout.propTypes = {
  admin: PropTypes.bool,
  user: PropTypes.object,
  children: React.PropTypes.element,
  goTo: PropTypes.func,
};

export default AdminLayout;
