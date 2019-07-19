// JS reimplementation of Style Closet scales for use in styled-components
const colors = {
  primary: '#2f3542',
  border: '#bdc3c7',
  highlight: '#bdc3c7',
  placeholder: '#f1f2f6',
  text: '#2f3542',
  textLight: '#bdc3c7',
  backgrounColor: '#ffffff'
};

const darkColors = {
  primary: '#bdc3c7',
  border: '#bdc3c7',
  highlight: 'rgba(255, 255, 255, 0.05)',
  placeholder: 'rgba(255, 255, 255, 0.05)',
  text: '#ffffff',
  textLight: '#bdc3c7',
  backgrounColor: '#000000'
};

const borderRadius = {
  small: '4px',
  default: '0.75rem'
}

const fontSizes = {
  small: '0.5rem',
  normal: '1rem',
  medium: '1.5rem',
  large: '2rem',
  huge: '3rem'
}

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string }
  darkColors: { [key in keyof typeof colors]: string }
  borderRadius: { [key in keyof typeof borderRadius]: string }
  fontSizes: { [key in keyof typeof fontSizes]: string }
}

export const theme: StyleClosetTheme = {
  colors,
  darkColors,
  borderRadius,
  fontSizes
};
