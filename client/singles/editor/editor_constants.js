import FormatBold from 'material-ui/svg-icons/editor/format-bold';
import FormatItalic from 'material-ui/svg-icons/editor/format-italic';
import FormatUnderlined from 'material-ui/svg-icons/editor/format-underlined';
import FormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered';
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';

const INLINE_STYLES = [
  {
    label: 'bold',
    hotKey: 'Ctrl+B',
    style: 'BOLD',
    icon: FormatBold,
  },
  {
    label: 'italic',
    hotKey: 'Ctrl+I',
    style: 'ITALIC',
    icon: FormatItalic,
  },
  {
    label: 'underline',
    hotKey: 'Ctrl+U',
    style: 'UNDERLINE',
    icon: FormatUnderlined,
  },
];

const HEADER_STYLES = [
  {
    label: 'header_1',
    style: 'header-one',
  },
  {
    label: 'header_2',
    style: 'header-two',
  },
  {
    label: 'header_3',
    style: 'header-three',
  },
  {
    label: 'header_4',
    style: 'header-four',
  },
  {
    label: 'header_5',
    style: 'header-five',
  },
  {
    label: 'header_6',
    style: 'header-six',
  },
];

const BLOCK_TYPES = [
  {
    label: 'number_list',
    style: 'ordered-list-item',
    icon: FormatListNumbered,
  },
  {
    label: 'bulleted_list',
    style: 'unordered-list-item',
    icon: FormatListBulleted,
  },
  {
    label: 'blockquote',
    style: 'blockquote',
    icon: FormatQuote,
  },
];

export {
  INLINE_STYLES,
  HEADER_STYLES,
  BLOCK_TYPES,
};
