import { hexToRgb } from './hexToRgb';

export const addAlpha = (hex: string | any, opacity: number) => {
  return `rgba(${hexToRgb(hex)}, ${opacity})`;
};
