import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import i18n from 'meteor/universe:i18n';
import { _ } from 'meteor/underscore';

import T from '/lib/i18n';

export default class NewsForm extends React.Component {
  static propTypes = {
    contacts: PropTypes.object,
    updateContacts: PropTypes.func,
  };
  mapInputs = (inputs) => {
    const phoneNumbers = _.reduce(inputs, (res, input, key) => {
      if (input && !!~key.indexOf('phoneNumber')) res.push(input);
      return res;
    }, []);
    return {
      city: inputs.city,
      address: inputs.address,
      information: inputs.information,
      email: inputs.email,
      lnglat: inputs.lnglat,
      phoneNumbers,
    };
  };
  submitForm = (model) => {
    this.props.updateContacts(model);
  };
  render() {
    const { contacts, contacts: { phoneNumbers = [] } } = this.props;
    return (
      <div className="contacts-editor">
        <Paper zDepth={1}>
          <div className="title-panel">
            <span className="title"><T>contacts</T></span>
          </div>
          <Divider />
          <div className="contacts-form">
            <Formsy.Form
              onValidSubmit={this.submitForm}
              mapping={this.mapInputs}
              noValidate
            >
              <FormsyText
                name="city"
                floatingLabelText={i18n.__('city')}
                value={contacts.city}
              /><br />
              <FormsyText
                name="address"
                floatingLabelText={i18n.__('address')}
                value={contacts.address}
              /><br />
              <FormsyText
                name="information"
                floatingLabelText={i18n.__('addition_information')}
                value={contacts.information}
                rows={2}
                multiLine
              /><br />
              <FormsyText
                name="email"
                floatingLabelText={i18n.__('email')}
                value={contacts.email}
              /><br />

              <FormsyText
                name={'phoneNumber1'}
                floatingLabelText={`${i18n.__('phone_number')} 1`}
                value={phoneNumbers[0]}
              /><br />
              <FormsyText
                name={'phoneNumber2'}
                floatingLabelText={`${i18n.__('phone_number')} 2`}
                value={phoneNumbers[1]}
              /><br />
              <FormsyText
                name={'phoneNumber3'}
                floatingLabelText={`${i18n.__('phone_number')} 3`}
                value={phoneNumbers[2]}
              /><br />

              <FormsyText
                name="lnglat"
                floatingLabelText={i18n.__('lnglat')}
                value={contacts.lnglat}
              /><br />
              <RaisedButton
                type="submit"
                label={i18n.__('update')}
                primary
              />
            </Formsy.Form>
          </div>
        </Paper>
      </div>
    );
  }
}
