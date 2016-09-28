import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import FormatColorText from 'material-ui/svg-icons/editor/format-color-text';
import InsertLink from 'material-ui/svg-icons/editor/insert-link';
import InsertPhoto from 'material-ui/svg-icons/editor/insert-photo';
import i18n from 'meteor/universe:i18n';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { grey800 } from 'material-ui/styles/colors';
import {
  INLINE_STYLES, BLOCK_TYPES, HEADER_STYLES, COLOR_STYLE_MAP,
  COLORS, FONT_STYLES, SIZE_STYLES,
} from './editor_constants';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
  selectField: {
    widthAuto: {
      width: 'auto',
    },
    widthCustom: {
      width: '170px',
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
    this.toggleColor = this.toggleColor.bind(this);
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
  toggleColor(e, child) {
    const { editorState } = this.state;
    const toggledColor = child.props.primaryText;
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(COLOR_STYLE_MAP)
      .reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color);
      }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }

    this.onChange(nextEditorState);
  }
  render() {
    const { editorState } = this.state;
    const currentStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
    const isHeaderStyle = HEADER_STYLES.some(type => type.style === blockType);
    const currentColorStyle = COLORS.find(color => currentStyle.has(color.style));
    const currentColor = COLOR_STYLE_MAP[currentColorStyle && currentColorStyle.style];
    return (
      <div className="editor-material">
        <Toolbar>
          <ToolbarGroup>
            <SelectField
              value={isHeaderStyle ? blockType : 'unstyled'}
              onChange={this.handleHeaders}
              style={styles.selectField.widthCustom}
              underlineStyle={styles.selectField.underlineStyle}
              iconStyle={styles.selectField.iconStyle}
            >
              <MenuItem
                value={'unstyled'}
                primaryText={i18n.__('normal_text')}
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

            <SelectField
              value="roboto"
              style={styles.selectField.widthCustom}
              underlineStyle={styles.selectField.underlineStyle}
              iconStyle={styles.selectField.iconStyle}
              autoWidth
            >
              {FONT_STYLES.map(type => (
                <MenuItem
                  key={type.label}
                  value={type.style}
                  primaryText={i18n.__(type.label)}
                />
              ))}
            </SelectField>
            <ToolbarSeparator style={styles.toolbarSeparator} />

            <SelectField
              value={11}
              style={styles.selectField.widthAuto}
              underlineStyle={styles.selectField.underlineStyle}
              iconStyle={styles.selectField.iconStyle}
            >
              {SIZE_STYLES.map(type => (
                <MenuItem
                  key={type.label}
                  value={type.style}
                  primaryText={type.label}
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
            <IconMenu
              onItemTouchTap={this.toggleColor}
              iconButtonElement={
                <IconButton
                  style={styles.toolbarBtn}
                  tooltip={i18n.__('text_color')}
                >
                  <FormatColorText color={currentColor && currentColor.color} />
                </IconButton>
              }
            >
              <MenuItem primaryText="no_color" />
              {COLORS.map(color => (
                <MenuItem key={color.label} primaryText={color.label} />
              ))}
            </IconMenu>
            <ToolbarSeparator style={styles.toolbarSeparator} />

            {BLOCK_TYPES.map(type => (
              <IconButton
                key={type.label}
                style={styles.toolbarBtn}
                tooltip={i18n.__(type.label)}
                onTouchTap={() => this.toggleBlockType(type.style)}
              >
                <type.icon color={type.style === blockType ? grey800 : ''} />
              </IconButton>
            ))}
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

EditorMaterial.propTypes = {
};

export default EditorMaterial;
