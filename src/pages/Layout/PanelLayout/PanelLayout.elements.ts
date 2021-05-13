import styled from 'styled-components';

import { device } from '../../../styles/Variables';

export const PanelLayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 400px minmax(10px, 1fr);
  min-height: 100vh;

  @media ${device.md} {
    grid-template-rows: var(--height-header);
    grid-template-columns: 1fr;
  }
`;

export const PanelLayoutContainer = styled.div``;
