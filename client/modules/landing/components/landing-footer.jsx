import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Phone from 'material-ui/svg-icons/communication/phone';
import EMail from 'material-ui/svg-icons/communication/email';

const styles = {
  flatBtn: {
    minWidth: '160px',
    height: '30px',
    lineHeight: '30px',
  },
  label: {
    color: '#E0E0E0',
    fontWeight: '400',
    textTransform: 'None',
  },
  iconPhone: {
    position: 'relative',
    top: '7px',
    marginRight: '5px',
  },
};

export default class LastNews extends React.Component {
  static propTypes = {
    pathTo: PropTypes.func,
  };
  render() {
    const { pathTo } = this.props;
    return (
      <footer className="landing-footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 footer-col">
              <h3>Компанія</h3>
              <FlatButton
                label="Туристичні послуги"
                style={styles.flatBtn}
                labelStyle={styles.label}
                href={pathTo('/tours')}
              /><br />
              <FlatButton
                label="Візові Послуги"
                style={styles.flatBtn}
                labelStyle={styles.label}
                href={pathTo('/visas')}
              /><br />
              <FlatButton
                label="Новини"
                style={styles.flatBtn}
                labelStyle={styles.label}
                href={pathTo('/news')}
              />
            </div>

            <div className="col-sm-4 footer-col">
              <Divider className="visible-xs" />
              <h3>Контакти</h3>
              <EMail style={styles.iconPhone} />
              <span className="footer-email">travelfrankivsk@gmail.com</span><br />
              <Phone style={styles.iconPhone} />+38506352410
            </div>

            <div className="col-sm-4 footer-col">
              <Divider className="visible-xs" />
              <h3>Адреса</h3>
              м. Івано-Франківськ<br />
              вул. Залізнична<br />
              буд. 39
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
