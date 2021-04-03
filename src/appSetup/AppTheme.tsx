import { FC, ReactElement, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../themes';

type PropTypes = {
  children: ReactElement;
};

export const AppTheme: FC<PropTypes> = ({ children }: PropTypes) => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    const isDark = matchMedia('(prefers-color-scheme: dark)');

    setCurrentTheme(isDark.matches ? darkTheme : lightTheme);

    isDark.addEventListener(`change`, (event) => {
      setCurrentTheme(event.matches ? darkTheme : lightTheme);
    });
  }, [currentTheme]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
