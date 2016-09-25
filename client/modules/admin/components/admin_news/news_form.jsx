import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle';
import i18n from 'meteor/universe:i18n';
import T from '/lib/i18n';

const styles = {
  title: {
    width: '100%',
  },
  toggle: {
    width: 'auto',
    marginTop: '10px',
  },
  submitBtn: {
    marginTop: '15px',
  },
};

class NewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(model) {
    this.props.createArticle(model);
  }
  render() {
    return (
      <div className="news-form">
        <Paper zDepth={1}>
          <div className="title-panel">
            <span className="title"><T>create_news</T></span>
          </div>
          <Divider />
          <div className="form">
            <Formsy.Form
              onValidSubmit={this.submitForm}
              noValidate
            >
              <FormsyText
                name="title"
                floatingLabelText={i18n.__('title')}
                style={styles.title}
                required
              />
              <FormsyText
                name="text"
                floatingLabelText={i18n.__('text')}
                style={styles.title}
                rows={2}
                multiLine
                required
              />
              <FormsyToggle
                name="isPublic"
                label={i18n.__('publish')}
                style={styles.toggle}
              />
              <RaisedButton
                type="submit"
                label={i18n.__('create')}
                style={styles.submitBtn}
                primary
              />
            </Formsy.Form>
          </div>
        </Paper>
      </div>
    );
  }
}

NewsForm.propTypes = {
  createArticle: PropTypes.func,
};

export default NewsForm;
