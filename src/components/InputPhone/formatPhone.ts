// FIXME: Странный ввод инфы (не печатается последний символ, сразу все не стирается)
// NOTE: Мб с большой буквы?

export const FormatPhone = (value: string) => {
  let inputNumbersValue = value.replace(/\D/g, '');
  let firstSymbols = '';
  let formattedInputValue = '';

  if (inputNumbersValue[0] === '9') {
    inputNumbersValue = '7' + inputNumbersValue;
  }

  if (inputNumbersValue[0] === '8') {
    firstSymbols = '8';
  } else if (inputNumbersValue[0] === '7') {
    firstSymbols = '+7';
  }

  formattedInputValue = firstSymbols;

  if (inputNumbersValue.length > 1) {
    formattedInputValue += ' (' + inputNumbersValue.substring(1, 4);
  }

  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
  }

  if (inputNumbersValue.length >= 8) {
    formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
  }

  if (inputNumbersValue.length >= 10) {
    formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
  }

  return formattedInputValue;
};
