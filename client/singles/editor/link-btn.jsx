import React, { PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import InsertLink from 'material-ui/svg-icons/editor/insert-link';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RichUtils, Entity } from 'draft-js';

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

export default class Link extends React.Component {
  static propTypes = {
    editorState: PropTypes.object,
    changeEditor: PropTypes.func,
  };
  state = {
    showURLInput: false,
    urlValue: '',
  };
  applyLink = () => {
    const { editorState, changeEditor } = this.props;
    const urlValue = this.state.urlValue;
    const entityKey = Entity.create('LINK', 'MUTABLE', { url: urlValue });

    changeEditor(RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey));
    this.setState({ showURLInput: false });
  };
  handleOpenUrlInput = (e) => {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const blockWithLinkAtBeginning = contentState.getBlockForKey(selection.getStartKey());
    const linkKey = blockWithLinkAtBeginning.getEntityAt(selection.getStartOffset());
    let url = '';
    if (linkKey) {
      const entityData = Entity.get(linkKey).getData();
      url = entityData.url;
    }
    this.setState({
      showURLInput: true,
      anchorEl: e.currentTarget,
      urlValue: url,
    }, () => {
      setTimeout(() => this.refs.linkField.focus(), 0);
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
          onTouchTap={this.handleOpenUrlInput}
          style={styles.toolbarBtn}
          tooltip="insert_link"
        >
          <InsertLink />
        </IconButton>
        <Popover
          open={showURLInput}
          anchorEl={anchorEl}
          onRequestClose={this.handleRequestClose}
          style={styles.popover}
        >
          <div style={styles.linkForm}>
            <TextField
              hintText="paste_link"
              ref="linkField"
              onChange={this.urlInputChange}
              value={urlValue}
            />
            <RaisedButton
              label="apply"
              onTouchTap={this.applyLink}
              style={styles.linkBtn}
              primary
            />
          </div>
        </Popover>
      </div>
    );
  }
}
