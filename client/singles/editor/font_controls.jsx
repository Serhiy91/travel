import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import i18n from 'meteor/universe:i18n';
import { FONT_STYLES } from './config';

const styles = {
  selectField: {
    style: {
      width: '170px',
    },
    underlineStyle: {
      borderColor: 'rgba(0, 0, 0, 0.17)',
    },
    iconStyle: {
      fill: 'rgba(0, 0, 0, 0.17)',
    },
  },
};

class FontControls extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFont = this.toggleFont.bind(this);
  }
  toggleFont(e, key, value) {
    const { changeEditor, editorState } = this.props;
    // changeEditor();
  }
  render() {
    const { currentStyle } = this.props;
    return (
      <SelectField
        value="roboto"
        onChange={this.toggleFont}
        style={styles.selectField.style}
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

FontControls.propTypes = {
  currentStyle: PropTypes.object,
  editorState: PropTypes.object,
  changeEditor: PropTypes.func,
};

export default FontControls;
