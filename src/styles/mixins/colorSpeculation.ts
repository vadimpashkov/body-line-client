const componentToHex = (value: number) => {
  var hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

export const hexToRgb = (hex: string, returnArray: boolean = false) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (returnArray) {
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
  }

  // if (invert) {
  //   return result
  //     ? `${255 - parseInt(result[1], 16)} ${255 - parseInt(result[2], 16)} ${255 - parseInt(result[3], 16)}`
  //     : null;
  // }

  return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
};

export const rgbToHex = (rgbString: string) => {
  const rgb = rgbString.replace(/\D/g, ' ').trim().split(' ');

  let r = componentToHex(Number(rgb[0]));
  let g = componentToHex(Number(rgb[1]));
  let b = componentToHex(Number(rgb[2]));

  return '#' + r + g + b;
};
