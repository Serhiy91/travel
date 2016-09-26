import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import FormatBold from 'material-ui/svg-icons/editor/format-bold';
import FormatItalic from 'material-ui/svg-icons/editor/format-italic';
import FormatUnderlined from 'material-ui/svg-icons/editor/format-underlined';
import i18n from 'meteor/universe:i18n';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { grey800 } from 'material-ui/styles/colors';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
};

class EditorMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.formatHandler = this.formatHandler.bind(this);
  }
  onChange(editorState) {
    this.setState({ editorState });
  }
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  formatHandler(command) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, command));
  }
  render() {
    const { editorState } = this.state;
    return (
      <div className="editor-material">
        <Toolbar>
          <ToolbarGroup>
            <IconButton
              style={styles.toolbarBtn}
              tooltip={`${i18n.__('bold')} (Ctrl+B)`}
              onTouchTap={() => this.formatHandler('BOLD')}
            >
              <FormatBold hoverColor={grey800} />
            </IconButton>
            <IconButton
              style={styles.toolbarBtn}
              tooltip={`${i18n.__('italic')} (Ctrl+I)`}
              onTouchTap={() => this.formatHandler('ITALIC')}
            >
              <FormatItalic hoverColor={grey800} />
            </IconButton>
            <IconButton
              style={styles.toolbarBtn}
              tooltip={`${i18n.__('underline')} (Ctrl+U)`}
              onTouchTap={() => this.formatHandler('UNDERLINE')}
            >
              <FormatUnderlined hoverColor={grey800} />
            </IconButton>
            <ToolbarSeparator />
          </ToolbarGroup>
        </Toolbar>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

EditorMaterial.propTypes = {
};

export default EditorMaterial;
