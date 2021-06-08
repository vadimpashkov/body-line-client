import styled from 'styled-components';

import { Container, Text } from '../../styles/GlobalStyles';
import { device } from '../../styles/Variables';

export const FooterBlock = styled.footer`
  background-color: var(--color-footer);
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-footer);
  gap: var(--margin-small);
  text-align: center;

  @media ${device.sm} {
    --height-footer: 120px;

    flex-flow: column;
    justify-content: center;
    gap: var(--margin-small);
  }
`;

export const Copyright = styled(Text)`
  user-select: none;
`;

export const WorkingHours = styled(Text)`
  user-select: none;
`;
