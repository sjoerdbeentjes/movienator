// JS reimplementation of Style Closet scales for use in styled-components
const colors = {
  primary: '#B53471',
  border: '#bdc3c7',
  placeholder: '#f1f2f6',
  highlight: '#f1f2f6',
  text: '#2f3542',
  textLight: '#a4b0be',
  imdb: '#F5C518'
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
  borderRadius: { [key in keyof typeof borderRadius]: string }
  fontSizes: { [key in keyof typeof fontSizes]: string }
}

export const theme: StyleClosetTheme = {
  colors,
  borderRadius,
  fontSizes
};
