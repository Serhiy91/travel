import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Person from 'material-ui/svg-icons/social/person';
import VpnKey from 'material-ui/svg-icons/communication/vpn-key';
import RaisedButton from 'material-ui/RaisedButton';
import i18n from 'meteor/universe:i18n';
import T from '/lib/i18n';
import { grey500 } from 'material-ui/styles/colors';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const style = {
  card: {
    margin: '40px auto',
    textAlign: 'center',
    maxWidth: 450,
    overflow: 'hidden',
  },
  titleStyle: {
    fontSize: '16px',
  },
  formsyText: {
    width: 'calc(100% - 40px)',
  },
  iconStyles: {
    marginRight: 16,
    position: 'relative',
    top: '3px',
  },
  raisedButton: {
    marginTop: 26,
    marginBottom: 20,
    float: 'right',
  },
};

class SignIn extends React.Component {
  state = {
    canSubmit: false,
  };
  submitForm = (data) => {
    this.props.signIn(data.email, data.password);
  };
  render() {
    const error = this.props.loginError;
    return (
      <Card style={style.card}>
        <CardTitle title={i18n.__('login')} titleStyle={style.titleStyle} />
        <Divider />
        <CardText>
          <Formsy.Form
            onValidSubmit={this.submitForm}
            onValid={() => this.setState({ canSubmit: true })}
            onInvalid={() => this.setState({ canSubmit: false })}
          >
            {error ?
              <div className="error">
                <span><T>error</T>: </span>
                <span>{error}</span>
              </div>
              : ''}
            <div>
              <Person
                style={style.iconStyles}
                color={grey500}
              />
              <FormsyText
                name="email"
                type="email"
                floatingLabelText={i18n.__('email')}
                validations="isEmail"
                validationError={i18n.__('email_error')}
                style={style.formsyText}
                required
              />
            </div>

            <div>
              <VpnKey
                style={style.iconStyles}
                color={grey500}
              />
              <FormsyText
                name="password"
                type="password"
                floatingLabelText={i18n.__('password')}
                style={style.formsyText}
                required
              />
            </div>
            <RaisedButton
              label={i18n.__('login')}
              type="submit"
              disabled={!this.state.canSubmit}
              style={style.raisedButton}
              primary
            />
          </Formsy.Form>
        </CardText>
      </Card>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func,
  loginError: PropTypes.string,
};

export default SignIn;
