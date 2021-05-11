import { hexToRgb } from './colorSpeculation';

export const addAlpha = (hex: string, opacity: number) => {
  return `rgb(${hexToRgb(hex)} / ${opacity})`;
};
