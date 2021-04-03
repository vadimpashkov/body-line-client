import { DefaultTheme } from 'styled-components';
import { palette } from '../styles/Variables';

export const darkTheme: DefaultTheme = {
  palette: {
    primary: palette.gray,
    font: palette.white,
    background: palette.black,
  },
};
