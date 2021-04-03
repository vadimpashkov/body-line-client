import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { AppTheme } from './appSetup/AppTheme';
import { Routes } from './appSetup/Routes';

import { Navbar, Footer } from './components';
import { ReduxState } from './appSetup/ReduxSetup';

export const App: FC = () => {
  return (
    <ReduxState>
      <AppTheme>
        <>
          <Router>
            <Navbar />
            <main className="main">
              <Routes />
            </main>
            <Footer />
          </Router>
          <GlobalStyles />
        </>
      </AppTheme>
    </ReduxState>
  );
};
