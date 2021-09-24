const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xxl: calcRem(20),
  xl: calcRem(18),
  lg: calcRem(16),
  md: calcRem(14),
  sm: calcRem(12),
  xs: calcRem(10),
};

const colors = {
  black: "#2D3436",
  green: "#00B894",
  yellow: "#FDCB6E",
  darkGray: "#636E72",
  gray: "#f6f8fa",
  lightGray: "#f6f8fa",
  red: "#FF7675",
  white: "#fff",
};

const theme = {
  fontSizes,
  colors,
};

export default theme;
