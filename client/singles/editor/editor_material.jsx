import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import i18n from 'meteor/universe:i18n';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { grey800, grey400 } from 'material-ui/styles/colors';
import { INLINE_STYLES, BLOCK_TYPES, HEADER_STYLES } from './editor_constants';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
  selectField: {
    style: {
      width: 'auto',
    },
    underlineStyle: {
      borderColor: 'rgba(0, 0, 0, 0.17)',
    },
    iconStyle: {
      fill: 'rgba(0, 0, 0, 0.17)',
    },
  },
  toolbarSeparator: {
    marginLeft: '10px',
    marginRight: '10px',
  },
};

class EditorMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineType = this.toggleInlineType.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.handleHeaders = this.handleHeaders.bind(this);
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
  toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }
  toggleInlineType(command) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, command));
  }
  handleHeaders(e, key, value) {
    this.toggleBlockType(value);
  }
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
            <SelectField
              value={blockType || 'unstyled'}
              onChange={this.handleHeaders}
              style={styles.selectField.style}
              underlineStyle={styles.selectField.underlineStyle}
              iconStyle={styles.selectField.iconStyle}
            >
              <MenuItem
                value={'unstyled'}
                primaryText={i18n.__('normal')}
              />
              {HEADER_STYLES.map(type => (
                <MenuItem
                  key={type.label}
                  value={type.style}
                  primaryText={i18n.__(type.label)}
                />
              ))}
            </SelectField>
            <ToolbarSeparator style={styles.toolbarSeparator} />

            {INLINE_STYLES.map(type => (
              <IconButton
                key={type.label}
                style={styles.toolbarBtn}
                tooltip={`${i18n.__(type.label)} (${type.hotKey})`}
                onTouchTap={() => this.toggleInlineType(type.style)}
              >
                <type.icon color={currentStyle.has(type.style) ? grey800 : ''} />
              </IconButton>
            ))}
            <ToolbarSeparator style={styles.toolbarSeparator} />

            {BLOCK_TYPES.map(type => (
              <IconButton
                key={type.label}
                style={styles.toolbarBtn}
                tooltip={`${i18n.__(type.label)}`}
                onTouchTap={() => this.toggleBlockType(type.style)}
              >
                <type.icon color={type.style === blockType ? grey800 : ''} />
              </IconButton>
            ))}
            <ToolbarSeparator style={styles.toolbarSeparator} />
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
