import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { SIZE_STYLES } from './config';

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
  toggleFontSize = (e, key, value) => {
    const { changeEditor, editorState } = this.props;
    // changeEditor();
  };
  render() {
    const { currentStyle } = this.props;
    return (
      <SelectField
        value={11}
        onChange={this.toggleFontSize}
        style={styles.selectField.style}
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
    );
  }
}
