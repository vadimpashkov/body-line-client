import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      font: {
        primary: string;
        secondary: string;
        invert: string;
      };
      background: {
        primary: string;
        secondary: string;
        invert: string;
      };
    };
  }
}
