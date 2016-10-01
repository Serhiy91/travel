import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import i18n from 'meteor/universe:i18n';
import { RichUtils } from 'draft-js';
import { grey800 } from 'material-ui/styles/colors';

import { BLOCK_TYPES } from './config';

const styles = {
  toolbarBtn: {
    marginTop: '4px',
  },
};

class BlockControls extends React.Component {
  toggleBlockType = (blockType) => {
    const { changeEditor, editorState } = this.props;
    changeEditor(RichUtils.toggleBlockType(editorState, blockType));
  };
  render() {
    const { blockType } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

BlockControls.propTypes = {
  blockType: PropTypes.string,
  editorState: PropTypes.object,
  changeEditor: PropTypes.func,
};

export default BlockControls;
