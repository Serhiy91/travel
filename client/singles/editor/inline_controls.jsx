import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import i18n from 'meteor/universe:i18n';
import { grey800 } from 'material-ui/styles/colors';
import { RichUtils } from 'draft-js';

import { INLINE_STYLES } from './config';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
};

export default class InlineControls extends React.Component {
  static propTypes = {
    editorState: PropTypes.object,
    currentStyle: PropTypes.object,
    changeEditor: PropTypes.func,
  };
  toggleInlineType = (command) => {
    const { changeEditor, editorState } = this.props;
    changeEditor(RichUtils.toggleInlineStyle(editorState, command));
  };
  render() {
    const { currentStyle } = this.props;
    return (
      <div>
        {INLINE_STYLES.map(type =>
          <IconButton
            key={type.label}
            style={styles.toolbarBtn}
            tooltip={`${i18n.__(type.label)} (${type.hotKey})`}
            onTouchTap={() => this.toggleInlineType(type.style)}
          >
            <type.icon color={currentStyle.has(type.style) ? grey800 : ''} />
          </IconButton>
        )}
      </div>
    );
  }
}
