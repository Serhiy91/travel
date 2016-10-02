import React, { PropTypes } from 'react';

export default class AdminLayout extends React.Component {
  static propTypes = {
    admin: PropTypes.bool,
    user: PropTypes.object,
    children: React.PropTypes.element,
    goTo: PropTypes.func,
  };
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
