import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import InsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import Videocam from 'material-ui/svg-icons/av/videocam';
import Audiotrack from 'material-ui/svg-icons/image/audiotrack';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import i18n from 'meteor/universe:i18n';
import { Entity, AtomicBlockUtils } from 'draft-js';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
  linkForm: {
    padding: '0px 12px',
  },
  linkBtn: {
    marginLeft: '12px',
  },
};

export default class Image extends React.Component {
  static propTypes = {
    editorState: PropTypes.object,
    changeEditor: PropTypes.func,
  };
  state = {
    showURLInput: false,
    urlValue: '',
    urlType: '',
  };
  confirmMedia = () => {
    const { editorState, changeEditor } = this.props;
    const { urlValue, urlType } = this.state;
    const entityKey = Entity.create(urlType, 'IMMUTABLE', { src: urlValue });

    changeEditor(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    this.setState({ showURLInput: false, urlValue: '' });
  };
  handleOpenUrlInput = (e, urlType) => {
    this.setState({
      showURLInput: true,
      anchorEl: e.currentTarget,
      urlType,
    }, () => {
      setTimeout(() => this.refs.urlField.focus(), 0);
    });
  };
  handleRequestClose = () => {
    this.setState({ showURLInput: false });
  };
  urlInputChange = (e) => {
    this.setState({ urlValue: e.currentTarget.value });
  };
  render() {
    const { showURLInput, anchorEl, urlValue } = this.state;
    return (
      <div className="link-btn">
        <IconButton
          onTouchTap={(e) => this.handleOpenUrlInput(e, 'image')}
          style={styles.toolbarBtn}
          tooltip={i18n.__('insert_image')}
        >
          <InsertPhoto />
        </IconButton>
        <IconButton
          onTouchTap={(e) => this.handleOpenUrlInput(e, 'video')}
          style={styles.toolbarBtn}
          tooltip={i18n.__('insert_video')}
        >
          <Videocam />
        </IconButton>
        <IconButton
          onTouchTap={(e) => this.handleOpenUrlInput(e, 'audio')}
          style={styles.toolbarBtn}
          tooltip={i18n.__('insert_audio')}
        >
          <Audiotrack />
        </IconButton>
        <Popover
          open={showURLInput}
          anchorEl={anchorEl}
          onRequestClose={this.handleRequestClose}
          style={styles.popover}
        >
          <div style={styles.linkForm}>
            <TextField
              hintText={i18n.__('paste_link')}
              ref="urlField"
              onChange={this.urlInputChange}
              value={urlValue}
            />
            <RaisedButton
              label={i18n.__('apply')}
              onTouchTap={this.confirmMedia}
              style={styles.linkBtn}
              primary
            />
          </div>
        </Popover>
      </div>
    );
  }
}
