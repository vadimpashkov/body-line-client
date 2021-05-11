import { FC } from 'react';

import { Footer, Header } from '../../../components';
import { Main } from '../../../styles/GlobalStyles';

export const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);
