import { FC } from 'react';

import { PanelLayoutWrapper, PanelLayoutContainer } from './PanelLayout.elements';

import { Sidebar } from '../../../components/Sidebar';

export const PanelLayout: FC = ({ children }) => (
  <PanelLayoutWrapper>
    <Sidebar />
    <PanelLayoutContainer>{children}</PanelLayoutContainer>
  </PanelLayoutWrapper>
);
