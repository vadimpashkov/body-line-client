import styled from 'styled-components';

import { Container, Link } from '../../styles/GlobalStyles';

import { pxToRem } from '../../styles/mixins';
import { device, font } from '../../styles/Variables';

export const SignInWrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;

  @media ${device.md} {
    grid-template-rows: 1fr auto;
    align-items: center;
  }
`;

export const SignInContainer = styled(Container)`
  margin: 0;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const SignInText = styled.p`
  color: var(--color-font-primary);
  padding: var(--margin-middle) var(--padding-container);
  text-align: right;

  @media ${device.md} {
    grid-row-start: 2;
    text-align: center;
  }
`;

export const SignInLink = styled(Link)`
  font-family: ${font.family.text.name};
  color: var(--color-font-primary);
  text-decoration: underline;
`;
