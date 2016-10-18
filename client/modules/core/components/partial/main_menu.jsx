import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import T from '/lib/i18n';

const styles = {
  title: {
    flex: 'none',
    cursor: 'pointer',
  },
  title2: {
    height: '60px',
    lineHeight: '60px',
    color: '#fff',
    fontSize: '24px',
    textTransform: 'none',
    fontWeight: '400',
    verticalAlign: 'none',
  },
};

export default class MainMenu extends React.Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    pathTo: PropTypes.func,
  };
  getMenuItemStyle = (isActive) => {
    const style = { height: '64px', lineHeight: '64px' };
    if (!isActive) style.color = '#fff';
    return style;
  };
  render() {
    const { pathTo, currentRoute } = this.props;
    return (
      <nav className="main-menu">
        <AppBar
          titleStyle={styles.title}
          showMenuIconButton={false}
        >
          <h1>
            <FlatButton
              label="Visa&Travel"
              href={pathTo('/')}
              style={this.getMenuItemStyle()}
              labelStyle={styles.title2}
            />
          </h1>
          <div className="menu-list">
            <FlatButton
              label={<T>tours</T>}
              href={pathTo('/tours')}
              secondary={currentRoute === 'tours'}
              style={this.getMenuItemStyle(currentRoute === 'tours')}
            />
            <FlatButton
              label={<T>visas</T>}
              href={pathTo('/visas')}
              secondary={currentRoute === 'visas'}
              style={this.getMenuItemStyle(currentRoute === 'visas')}
            />
            <FlatButton
              label={<T>news</T>}
              href={pathTo('/news')}
              secondary={currentRoute === 'news'}
              style={this.getMenuItemStyle(currentRoute === 'news')}
            />
            <FlatButton
              label={<T>contacts</T>}
              href={pathTo('/contacts')}
              secondary={currentRoute === 'contacts'}
              style={this.getMenuItemStyle(currentRoute === 'contacts')}
            />
          </div>
        </AppBar>
      </nav>
    );
  }
}
