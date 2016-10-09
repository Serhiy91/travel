import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import {
  Editor, EditorState, RichUtils, CompositeDecorator, Entity, convertToRaw, convertFromRaw,
} from 'draft-js';

import InlineControls from './inline_controls';
import BlockControls from './block_controls';
import HeaderControls from './header_controls';
import ColorControls from './color_controls';
import FontControls from './font_controls';
import FontSizeControls from './font_size_controls';
import LinkBtn from './link-btn';
import Link from './link';
import Media from './media';
import MediaControls from './media_controls';
import { customStyleMap } from './config';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
  toolbarSeparator: {
    marginLeft: '10px',
    marginRight: '10px',
  },
};

export default class EditorMaterial extends React.Component {
  static propTypes = {
    value: PropTypes.object,
  };
  constructor(props) {
    super(props);
    const decorator = new CompositeDecorator([{
      strategy: findLinkEntities,
      component: Link,
    }]);
    let editorState;
    if (props.value) {
      const contentState = convertFromRaw(props.value);
      editorState = EditorState.createWithContent(contentState, decorator);
    } else {
      editorState = EditorState.createEmpty(decorator);
    }
    this.state = { editorState };
  }
  onChange = (editorState) => {
    this.setState({ editorState });
  };
  getRawContent = () => {
    const { editorState } = this.state;
    return convertToRaw(editorState.getCurrentContent());
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

            <LinkBtn
              editorState={editorState}
              changeEditor={this.onChange}
            />
            <MediaControls
              editorState={editorState}
              changeEditor={this.onChange}
            />
            <ToolbarSeparator style={styles.toolbarSeparator} />
          </ToolbarGroup>
        </Toolbar>

        <div className="admin-editor">
          <Editor
            blockRendererFn={mediaBlockRenderer}
            customStyleMap={customStyleMap}
            editorState={editorState}
            handleKeyCommand={this.hanleKeyCommand}
            onChange={this.onChange}
            stripPastedStyles
          />
        </div>
      </div>
    );
  }
}

function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      Entity.get(entityKey).getType() === 'LINK'
    );
  }, callback);
}

function mediaBlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
}
