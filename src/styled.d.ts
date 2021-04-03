import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary?: string;
      font: string;
      background: string;
      // button: {
      //   font: string;
      //   background: string;
      //   border: string;
      // };
      // calcDarkInRgba: (opacity: number) => string;
    };
  }
}
