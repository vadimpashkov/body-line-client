import { breakpoints } from '../Variables';

const maxScreenWidth = breakpoints.xl;
const minScreenWidth = breakpoints.xxs;

export const responsive = (minSize: number, maxSize: number) => {
  const diffSizes = maxSize - minSize;
  const diffScreens = maxScreenWidth - minScreenWidth;
  const calc = `${minSize}px + ${diffSizes} * (100vw - ${minScreenWidth}px) / ${diffScreens}`;

  return `clamp(${minSize}px, ${calc}, ${maxSize}px)`;
};
