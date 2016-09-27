import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle';
import EditorMaterial from '/client/singles/editor/editor_material.jsx';
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
    const { article } = this.props;
    this.props.upsertArticle(model, article || article._id);
  }
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
              <FormsyText
                name="text"
                floatingLabelText={i18n.__('text')}
                style={styles.title}
                value={article.text}
                rows={2}
                multiLine
                required
              />
              <FormsyToggle
                name="isPublic"
                label={i18n.__('publish')}
                style={styles.toggle}
                value={article.isPublic}
              />
              <RaisedButton
                type="submit"
                label={i18n.__(article ? 'update' : 'create')}
                style={styles.submitBtn}
                primary
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
