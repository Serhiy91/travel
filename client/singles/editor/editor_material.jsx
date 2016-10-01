import React from 'react';
import IconButton from 'material-ui/IconButton';
import InsertLink from 'material-ui/svg-icons/editor/insert-link';
import InsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';

import InlineControls from './inline_controls';
import BlockControls from './block_controls';
import HeaderControls from './header_controls';
import ColorControls from './color_controls';
import FontControls from './font_controls';
import FontSizeControls from './font_size_controls';
import { COLOR_STYLE_MAP } from './config';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
  toolbarSeparator: {
    marginLeft: '10px',
    marginRight: '10px',
  },
};

class EditorMaterial extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  };
  onChange = (editorState) => {
    this.setState({ editorState });
  };
  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  render() {
    const { editorState } = this.state;
    const currentStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    return (
      <div className="editor-material">
        <Toolbar>
          <ToolbarGroup>
            <HeaderControls
              editorState={editorState}
              blockType={blockType}
              changeEditor={this.onChange}
            />
            <ToolbarSeparator style={styles.toolbarSeparator} />

            <FontControls
              editorState={editorState}
              currentStyle={currentStyle}
              changeEditor={this.onChange}
            />
            <ToolbarSeparator style={styles.toolbarSeparator} />

            <FontSizeControls
              editorState={editorState}
              currentStyle={currentStyle}
              changeEditor={this.onChange}
            />
            <ToolbarSeparator style={styles.toolbarSeparator} />

            <InlineControls
              editorState={editorState}
              currentStyle={currentStyle}
              changeEditor={this.onChange}
            />
            <ColorControls
              editorState={editorState}
              currentStyle={currentStyle}
              changeEditor={this.onChange}
            />
            <ToolbarSeparator style={styles.toolbarSeparator} />

            <BlockControls
              editorState={editorState}
              blockType={blockType}
              changeEditor={this.onChange}
            />
            <ToolbarSeparator style={styles.toolbarSeparator} />

            <IconButton
              style={styles.toolbarBtn}
              tooltip="insert_link"
            >
              <InsertLink />
            </IconButton>
            <IconButton
              style={styles.toolbarBtn}
              tooltip="insert_image"
            >
              <InsertPhoto />
            </IconButton>
            <ToolbarSeparator style={styles.toolbarSeparator} />
          </ToolbarGroup>
        </Toolbar>

        <Editor
          customStyleMap={COLOR_STYLE_MAP}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default EditorMaterial;
