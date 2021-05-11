import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { AppTheme } from './appSetup/AppTheme';
import { Routes } from './router/Routes';
import { ReduxState } from './appSetup/ReduxSetup';
import { QueryContext } from './appSetup/QueryContext';

export const App: FC = () => {
  return (
    <QueryContext>
      <ReduxState>
        <AppTheme>
          <>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
            <GlobalStyles />
          </>
        </AppTheme>
      </ReduxState>
    </QueryContext>
  );
};
