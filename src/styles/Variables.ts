// export const color = {
//   white: '#fff',
//   gray: '#6b6b6b',
//   black: '#212121',
// };

export const font = {
  size: 16,
  family: {
    title: {
      name: 'Oswald',
      weight: 600,
    },
    text: {
      name: 'Raleway',
      weight: 400,
    },
  },
  lineHeight: 1.5,
};

export const breakpoints = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 992,
  ml: 1200,
  lg: 1400,
  xl: 1600,
  xxl: 1920,
};

export const device = {
  xxs: `(max-width: ${breakpoints.xxs}px)`,
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
  ml: `(max-width: ${breakpoints.ml}px)`,
  lg: `(max-width: ${breakpoints.lg}px)`,
  xl: `(max-width: ${breakpoints.xl}px)`,
  xxl: `(max-width: ${breakpoints.xxl}px)`,
  touch: '(pointer: coarse)',
  cursor: '(pointer: fine)',
};
