import styled from 'styled-components';

import { Container, Text } from '../../styles/GlobalStyles';

import { device } from '../../styles/Variables';
import { pxToRem, responsive } from '../../styles/mixins';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

export const FooterBlock = styled.footer`
  background-color: #282828;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--height-footer);
  text-align: center;
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${pxToRem(16)};
  padding-top: ${pxToRem(24)};
  padding-bottom: ${pxToRem(24)};
  color: var(--color-font-primary-invert);

  @media ${device.sm} {
    flex-flow: column;
    text-align: center;
  } */
`;

export const Copyright = styled(Text)`
  justify-content: flex-end;
  user-select: none;
`;
