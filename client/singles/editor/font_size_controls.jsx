import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { RichUtils, Modifier, EditorState } from 'draft-js';

import { SIZE_STYLES, SIZE_STYLE_MAP } from './config';

const styles = {
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
};

export default class FontSizeControls extends React.Component {
  static propTypes = {
    currentStyle: PropTypes.object,
    editorState: PropTypes.object,
    changeEditor: PropTypes.func,
  };
  toggleFontSize = (e, key, fontSize) => {
    const { changeEditor, editorState } = this.props;
    const selection = editorState.getSelection();

    // Let's just allow one font size at a time. Turn off all active font sizes.
    // console.log(Object.keys(SIZE_STYLE_MAP));
    const nextContentState = Object.keys(SIZE_STYLE_MAP).reduce((contentState, size) => (
      Modifier.removeInlineStyle(contentState, selection, size)
    ), editorState.getCurrentContent());

    let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style');
    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current font size.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(
        (state, size) => RichUtils.toggleInlineStyle(state, size), nextEditorState
      );
    }

    // If the font size is being toggled on, apply it.
    if (!currentStyle.has(fontSize)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, fontSize);
    }
    changeEditor(nextEditorState);
  };
  render() {
    const { currentStyle } = this.props;

    const currentSizeStyle = SIZE_STYLES.find(size => currentStyle.has(size.label));
    return (
      <SelectField
        value={currentSizeStyle ? currentSizeStyle.label : '16'}
        onChange={this.toggleFontSize}
        style={styles.selectField.style}
        underlineStyle={styles.selectField.underlineStyle}
        iconStyle={styles.selectField.iconStyle}
      >
        {SIZE_STYLES.map(type => (
          <MenuItem
            key={type.label}
            value={type.label}
            primaryText={type.label}
          />
        ))}
      </SelectField>
    );
  }
}
