const black = '#000000';
const white = '#ffffff';

const primaryPalette = {
  0: '#E4102E',
  10: '#E81B3F',
  20: '#EB2148',
  30: '#ED2752',
  40: '#EF2C5A',
  50: '#F14C73',
  60: '#F46B8C',
  70: '#F796AD',
  80: '#FAC0CE',
  90: '#FDE6EB',
}

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
};