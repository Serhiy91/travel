import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import T from '/lib/i18n';

const styles = {
  menuItem: {
    height: '64px',
    lineHeight: '64px',
    color: '#fff',
    width: '20%',
  },
  menuLabel: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  logo: {
    fontSize: '24px',
    textTransform: 'none',
  },
  title: {
    height: '60px',
    lineHeight: '60px',
    color: '#fff',
    width: '100%',
  },
};

export default class MainMenu extends React.Component {
  static propTypes = {
    pathTo: PropTypes.func,
  };
  render() {
    const { pathTo } = this.props;
    return (
      <div className="lending-menu">
        <nav>
          <FlatButton
            label={<T>tours</T>}
            href={pathTo('/tours')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
          <FlatButton
            label={<T>visas</T>}
            href={pathTo('/visas')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
          <h1>
            <FlatButton
              label="Visa&Travel"
              style={styles.title}
              labelStyle={styles.logo}
              disabled
            />
          </h1>
          <FlatButton
            label={<T>news</T>}
            href={pathTo('/news')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
          <FlatButton
            label={<T>contacts</T>}
            href={pathTo('/contacts')}
            style={styles.menuItem}
            labelStyle={styles.menuLabel}
          />
        </nav>
      </div>
    );
  }
}
