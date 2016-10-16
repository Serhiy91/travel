import React, { PropTypes } from 'react';
import BeachAccess from 'material-ui/svg-icons/places/beach-access';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Flight from 'material-ui/svg-icons/maps/flight';
import Paper from 'material-ui/Paper';
import T from '/lib/i18n';
import { deepPurple500, grey100 } from 'material-ui/styles/colors';

const styles = {
  svgIcon: {
    width: '50px',
    height: '50px',
    color: deepPurple500,
  },
  servicePaper: {
    backgroundColor: grey100,
  },
};

export default class MainServices extends React.Component {
  render() {
    return (
      <div className="row company-services">
        <div className="col-sm-4 service">
          <Paper
            className="service-paper"
            style={styles.servicePaper}
            circle
          >
            <BeachAccess style={styles.svgIcon} />
          </Paper>
          <h3><T>tours</T></h3>
          <p className="muted"><T>tours_description</T></p>
        </div>

        <div className="col-sm-4 service">
          <Paper
            className="service-paper"
            style={styles.servicePaper}
            circle
          >
            <ContactMail style={styles.svgIcon} />
          </Paper>
          <h3><T>visas</T></h3>
          <p className="muted"><T>visas_description</T></p>
        </div>

        <div className="col-sm-4 service">
          <Paper
            className="service-paper"
            style={styles.servicePaper}
            circle
          >
            <Flight style={styles.svgIcon} />
          </Paper>
          <h3><T>booking</T></h3>
          <p className="muted"><T>booking_description</T></p>
        </div>
      </div>
    );
  }
}
