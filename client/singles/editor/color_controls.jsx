import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FormatColorText from 'material-ui/svg-icons/editor/format-color-text';
import i18n from 'meteor/universe:i18n';
import { RichUtils, Modifier, EditorState } from 'draft-js';

import { COLORS, COLOR_STYLE_MAP } from './config';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
};

class ColorControls extends React.Component {
  toggleColor = (e, child) => {
    const { changeEditor, editorState } = this.props;
    const toggledColor = child.props.primaryText;
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(COLOR_STYLE_MAP).reduce((contentState, color) => (
        Modifier.removeInlineStyle(contentState, selection, color)
    ), editorState.getCurrentContent());

    let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style');
    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(
        (state, color) => RichUtils.toggleInlineStyle(state, color),
        nextEditorState
      );
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, toggledColor);
    }
    changeEditor(nextEditorState);
  };
  render() {
    const { currentStyle } = this.props;
    const currentColorStyle = COLORS.find(color => currentStyle.has(color.style));
    const currentColor = COLOR_STYLE_MAP[currentColorStyle && currentColorStyle.style];
    return (
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
    );
  }
}

ColorControls.propTypes = {
  currentStyle: PropTypes.object,
  editorState: PropTypes.object,
  changeEditor: PropTypes.func,
};

export default ColorControls;
