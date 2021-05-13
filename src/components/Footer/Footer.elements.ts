import styled from 'styled-components';

import { Container, Text } from '../../styles/GlobalStyles';

export const FooterBlock = styled.footer`
  background-color: var(--color-footer);
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--height-footer);
  text-align: center;
`;

export const Copyright = styled(Text)`
  justify-content: flex-end;
  user-select: none;
`;
