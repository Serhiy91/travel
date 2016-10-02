import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import T from '/lib/i18n';
import BeachAccess from 'material-ui/svg-icons/places/beach-access';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import Place from 'material-ui/svg-icons/maps/place';
import AppBar from 'material-ui/AppBar';
import { pinkA200 } from 'material-ui/styles/colors';

const styles = {
  menuItem: {
    color: pinkA200,
  },
};

export default class AdminNavBar extends React.Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    goTo: PropTypes.func,
  };
  getCurrentStyle(route) {
    return !!~this.props.currentRoute.indexOf(route) ? styles.menuItem : {};
  }
  render() {
    const { goTo } = this.props;
    return (
      <nav>
        <Drawer open>
          <AppBar
            title="Visa&Travel"
            showMenuIconButton={false}
          />
          <MenuItem
            leftIcon={<BeachAccess />}
            onTouchTap={() => goTo('admin.tours')}
            style={this.getCurrentStyle('tours')}
          >
            <T>tours</T>
          </MenuItem>
          <MenuItem
            onTouchTap={() => goTo('admin.visas')}
            leftIcon={<ContactMail />}
            style={this.getCurrentStyle('visas')}
          >
            <T>visas</T>
          </MenuItem>
          <MenuItem
            onTouchTap={() => goTo('admin.news')}
            leftIcon={<ImportContacts />}
            style={this.getCurrentStyle('news')}
          >
            <T>news</T>
          </MenuItem>
          <MenuItem
            onTouchTap={() => goTo('admin.contacts')}
            leftIcon={<Place />}
            style={this.getCurrentStyle('contacts')}
          >
            <T>contacts</T>
          </MenuItem>
        </Drawer>
      </nav>
    );
  }
}
