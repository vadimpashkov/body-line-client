import { font } from '../Variables';

export const pxToRem = (px: number): string => {
  return `${px / font.size}rem`;
};
