import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import i18n from 'meteor/universe:i18n';
import { RichUtils, Modifier, EditorState } from 'draft-js';

import { FONT_STYLES, FONT_STYLE_MAP } from './config';

const styles = {
  selectField: {
    style: {
      width: '170px',
    },
    hintStyle: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    underlineStyle: {
      borderColor: 'rgba(0, 0, 0, 0.17)',
    },
    iconStyle: {
      fill: 'rgba(0, 0, 0, 0.17)',
    },
  },
};

export default class FontControls extends React.Component {
  static propTypes = {
    currentStyle: PropTypes.object,
    editorState: PropTypes.object,
    changeEditor: PropTypes.func,
  };
  toggleFont = (e, key, toggledFont) => {
    const { changeEditor, editorState } = this.props;
    const selection = editorState.getSelection();

    // Let's just allow one font size at a time. Turn off all active fonts.
    const nextContentState = Object.keys(FONT_STYLE_MAP).reduce((contentState, font) => (
      Modifier.removeInlineStyle(contentState, selection, font)
    ), editorState.getCurrentContent());

    let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style');
    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current font.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(
        (state, font) => RichUtils.toggleInlineStyle(state, font),
        nextEditorState
      );
    }

    // If the font is being toggled on, apply it.
    if (!currentStyle.has(toggledFont)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, toggledFont);
    }
    changeEditor(nextEditorState);
  };
  render() {
    const { currentStyle } = this.props;
    const currentFontStyle = FONT_STYLES.find(font => currentStyle.has(font.style));
    return (
      <SelectField
        value={currentFontStyle ? currentFontStyle.label : 'times-new-roman'}
        onChange={this.toggleFont}
        style={styles.selectField.style}
        labelStyle={styles.selectField.hintStyle}
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
    );
  }
}
