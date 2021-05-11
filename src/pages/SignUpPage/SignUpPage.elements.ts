import styled from 'styled-components';

import { Container, Link } from '../../styles/GlobalStyles';

import { device, font } from '../../styles/Variables';

export const SignUpWrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;

  @media ${device.md} {
    grid-template-rows: 1fr auto;
    align-items: center;
  }
`;

export const SignUpContainer = styled(Container)`
  margin: 0;
  margin-bottom: var(--margin-middle);
  display: grid;
  align-items: center;
  justify-items: center;

  @media ${device.md} {
    margin-bottom: 0;
  }
`;

export const SignUpText = styled.p`
  color: var(--color-font-primary);
  padding: var(--margin-middle) var(--padding-container);
  text-align: right;

  @media ${device.md} {
    grid-row-start: 2;
    text-align: center;
  }
`;

export const SignUpLink = styled(Link)`
  font-family: ${font.family.text.name};
  color: var(--color-font-primary);
  text-decoration: underline;
`;
