import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import T from '/lib/i18n';

const styles = {
  title: {
    flex: 'none',
    cursor: 'pointer',
  },
};

export default class MainMenu extends React.Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    goTo: PropTypes.func,
  };
  getMenuItemStyle = (isActive) => {
    const style = { height: '100%' };
    if (!isActive) style.color = '#fff';
    return style;
  };
  render() {
    const { goTo, currentRoute } = this.props;
    return (
      <nav className="main-menu">
        <AppBar
          title="Visa&Travel"
          onTitleTouchTap={() => goTo('landing')}
          titleStyle={styles.title}
          showMenuIconButton={false}
        >
          <div className="menu-list">
            <FlatButton
              label={<T>tours</T>}
              onTouchTap={() => goTo('tours')}
              secondary={currentRoute === 'tours'}
              style={this.getMenuItemStyle(currentRoute === 'tours')}
            />
            <FlatButton
              label={<T>visas</T>}
              onTouchTap={() => goTo('visas')}
              secondary={currentRoute === 'visas'}
              style={this.getMenuItemStyle(currentRoute === 'visas')}
            />
            <FlatButton
              label={<T>news</T>}
              onTouchTap={() => goTo('news')}
              secondary={currentRoute === 'news'}
              style={this.getMenuItemStyle(currentRoute === 'news')}
            />
            <FlatButton
              label={<T>contacts</T>}
              onTouchTap={() => goTo('contacts')}
              secondary={currentRoute === 'contacts'}
              style={this.getMenuItemStyle(currentRoute === 'contacts')}
            />
          </div>
        </AppBar>
      </nav>
    );
  }
}
