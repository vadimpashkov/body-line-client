import { hexToRgb, rgbToHex } from '../mixins';

export const invertColor = (hex: string) => {
  const rgb = hexToRgb(hex, true);

  let r: number = 0;
  let g: number = 0;
  let b: number = 0;

  if (rgb) {
    r = 255 - Number(rgb[0]);
    g = 255 - Number(rgb[1]);
    b = 255 - Number(rgb[2]);
  }

  return rgbToHex(`${r} ${g} ${b}`);
};
