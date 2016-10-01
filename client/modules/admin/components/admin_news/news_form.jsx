import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle';
import i18n from 'meteor/universe:i18n';
import T from '/lib/i18n';

import EditorMaterial from '/client/singles/editor/editor_material.jsx';

const styles = {
  form: {
    overflow: 'hidden',
  },
  title: {
    width: 'calc(100% - 300px)',
  },
  toggle: {
    width: 'auto',
    marginTop: '35px',
    marginRight: '25px',
    float: 'right',
  },
  submitBtn: {
    marginTop: '28px',
    float: 'right',
  },
};

class NewsForm extends React.Component {
  submitForm = (model) => {
    const { article } = this.props;
    this.props.upsertArticle(model, article || article._id);
  };
  render() {
    const { article = {} } = this.props;
    return (
      <div className="news-form">
        <Paper zDepth={1}>
          <div className="title-panel">
            <span className="title"><T>{article ? 'edit' : 'create_news'}</T></span>
          </div>
          <Divider />
          <div className="form">
            <Formsy.Form
              style={styles.form}
              onValidSubmit={this.submitForm}
              noValidate
            >
              <FormsyText
                name="title"
                floatingLabelText={i18n.__('title')}
                style={styles.title}
                value={article.title}
                required
              />
              <RaisedButton
                type="submit"
                label={i18n.__(article ? 'update' : 'create')}
                style={styles.submitBtn}
                primary
              />
              <FormsyToggle
                name="isPublic"
                label={i18n.__('publish')}
                style={styles.toggle}
                value={article.isPublic}
              />
            </Formsy.Form>
          </div>
        </Paper>
        <Paper zDepth={1} className="editor-wrapper"><EditorMaterial /></Paper>
      </div>
    );
  }
}

NewsForm.propTypes = {
  article: PropTypes.object,
  upsertArticle: PropTypes.func,
};

export default NewsForm;
