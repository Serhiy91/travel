import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import T from '/lib/i18n';

const styles = {
  menuItem: {
    height: '64px',
    color: '#fff',
  },
  menuLabel: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  logo: {
    fontSize: '24px',
    paddingLeft: '40px',
    paddingRight: '40px',
    textTransform: 'none',
  },
};

export default class MainMenu extends React.Component {
  static propTypes = {
    goTo: PropTypes.func,
  };
  render() {
    const { goTo } = this.props;
    return (
      <div className="lending-menu">
        <nav>
          <FlatButton
            label={<T>tours</T>}
            onTouchTap={() => goTo('tours')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
          <FlatButton
            label={<T>visas</T>}
            onTouchTap={() => goTo('visas')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
          <FlatButton
            label="Visa&Travel"
            style={styles.menuItem}
            labelStyle={styles.logo}
            disabled
          />
          <FlatButton
            label={<T>news</T>}
            onTouchTap={() => goTo('news')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
          <FlatButton
            label={<T>contacts</T>}
            onTouchTap={() => goTo('contacts')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
        </nav>
      </div>
    );
  }
}
