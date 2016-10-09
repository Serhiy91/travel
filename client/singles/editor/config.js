import FormatBold from 'material-ui/svg-icons/editor/format-bold';
import FormatItalic from 'material-ui/svg-icons/editor/format-italic';
import FormatUnderlined from 'material-ui/svg-icons/editor/format-underlined';
import FormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered';
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import { _ } from 'meteor/underscore';

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
  { label: 'header_1', style: 'header-one' },
  { label: 'header_2', style: 'header-two' },
  { label: 'header_3', style: 'header-three' },
  { label: 'header_4', style: 'header-four' },
  { label: 'header_5', style: 'header-five' },
  { label: 'header_6', style: 'header-six' },
];

const BLOCK_TYPES = [
  { label: 'number_list', style: 'ordered-list-item', icon: FormatListNumbered },
  { label: 'bulleted_list', style: 'unordered-list-item', icon: FormatListBulleted },
  { label: 'blockquote', style: 'blockquote', icon: FormatQuote },
];

const COLORS = [
  { label: 'red', style: 'red' },
  { label: 'orange', style: 'orange' },
  { label: 'yellow', style: 'yellow' },
  { label: 'green', style: 'green' },
  { label: 'blue', style: 'blue' },
  { label: 'indigo', style: 'indigo' },
  { label: 'violet', style: 'violet' },
];

const COLOR_STYLE_MAP = {
  red: {
    color: 'rgba(255, 0, 0, 1.0)',
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)',
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)',
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)',
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)',
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)',
  },
  violet: {
    color: 'rgba(127, 0, 255, 1.0)',
  },
};

const FONT_STYLES = [
  { label: 'arial', style: 'arial' },
  { label: 'times-new-roman', style: 'times-new-roman' },
  { label: 'calibri', style: 'calibri' },
  { label: 'cambria', style: 'cambria' },
  { label: 'comic-sans-ms', style: 'comic-sans-ms' },
  { label: 'courier-new', style: 'courier-new' },
  { label: 'roboto', style: 'roboto' },
];

const FONT_STYLE_MAP = {
  arial: { fontFamily: 'Arial' },
  'times-new-roman': { fontFamily: 'Times New Roman' },
  calibri: { fontFamily: 'Calibri' },
  cambria: { fontFamily: 'Cambria' },
  'comic-sans-ms': { fontFamily: 'Comic Sans MS' },
  'courier-new': { fontFamily: 'Courier New' },
  roboto: { fontFamily: 'Roboto' },
};

const SIZE_STYLES = [
  { label: '8', style: 8 },
  { label: '9', style: 9 },
  { label: '10', style: 10 },
  { label: '11', style: 11 },
  { label: '12', style: 12 },
  { label: '14', style: 14 },
  { label: '16', style: 16 },
  { label: '18', style: 18 },
  { label: '24', style: 24 },
  { label: '30', style: 30 },
  { label: '36', style: 36 },
  { label: '48', style: 48 },
  { label: '60', style: 60 },
  { label: '72', style: 72 },
  { label: '96', style: 96 },
];

const SIZE_STYLE_MAP = {
  '8': { fontSize: '8pt' },
  '9': { fontSize: '9pt' },
  '10': { fontSize: '10pt' },
  '11': { fontSize: '11pt' },
  '12': { fontSize: '12pt' },
  '14': { fontSize: '14pt' },
  '16': { fontSize: '16pt' },
  '18': { fontSize: '18pt' },
  '24': { fontSize: '24pt' },
  '30': { fontSize: '30pt' },
  '36': { fontSize: '36pt' },
  '48': { fontSize: '48pt' },
  '60': { fontSize: '60pt' },
  '72': { fontSize: '72pt' },
  '96': { fontSize: '96pt' },
};

const customStyleMap = _.extend({}, COLOR_STYLE_MAP, FONT_STYLE_MAP, SIZE_STYLE_MAP);

export {
  INLINE_STYLES,
  HEADER_STYLES,
  BLOCK_TYPES,
  COLORS,
  COLOR_STYLE_MAP,
  FONT_STYLES,
  FONT_STYLE_MAP,
  SIZE_STYLES,
  SIZE_STYLE_MAP,
  customStyleMap,
};
