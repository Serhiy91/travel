import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import i18n from 'meteor/universe:i18n';
import { RichUtils } from 'draft-js';
import { HEADER_STYLES } from './config';

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

class HeaderControls extends React.Component {
  toggleBlockType = (e, key, value) => {
    const { changeEditor, editorState } = this.props;
    changeEditor(RichUtils.toggleBlockType(editorState, value));
  };
  render() {
    const { blockType } = this.props;
    const isHeaderStyle = HEADER_STYLES.some(type => type.style === blockType);
    return (
      <SelectField
        value={isHeaderStyle ? blockType : 'unstyled'}
        onChange={this.toggleBlockType}
        style={styles.selectField.style}
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
    );
  }
}

HeaderControls.propTypes = {
  blockType: PropTypes.string,
  editorState: PropTypes.object,
  changeEditor: PropTypes.func,
};

export default HeaderControls;
