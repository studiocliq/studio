const black = '#000000';
const white = '#ffffff';

const primaryPalette = {
  0: '#000000',
  10: '#520F07',
  20: '#A41D0E',
  30: '#EC3420',
  40: '#F37D71',
  50: '#F5948A',
  60: '#F7AAA1',
  70: '#F9BFB9',
  80: '#FBD4D0',
  90: '#FDEAE8',
  100: '#FFFFFF',
};

const bluePalette = {
  0: '#000000',
  10: '#092E4C',
  20: '#135C98',
  30: '#1D8AE3',
  40: '#6AB2ED',
  50: '#82BEF0',
  60: '#9BCBF3',
  70: '#B4D8F6',
  80: '#CDE5F9',
  90: '#E6F2FC',
  100: '#FFFFFF',
};

const secondaryPalette = {
  0: '#372127',
  10: '#493137',
  20: '#533940',
  30: '#5D4249',
  40: '#654950',
  50: '#7C646A',
  60: '#938085',
  70: '#B2A4A8',
  80: '#D1C8CB',
  90: '#EDE9EA',
}

const primary = primaryPalette[40];
const secondary = secondaryPalette[40];

const gray = {
  400: '#757575',
};

export default {
  black,
  white,
  gray,

  primary,
  primaryPalette,
  
  secondary,
  secondaryPalette,

  bluePalette,
};