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

  @media ${device.sm} {
    background-color: var(--color-background-primary-invert);
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
    padding: var(--margin-middle) 0;
    text-align: center;
  }
`;

export const SignUpText = styled.p`
  background-color: var(--color-background-primary);
  color: var(--color-font-primary);
  padding: var(--margin-middle) var(--padding-container);
  text-align: right;

  @media ${device.md} {
    position: sticky;
    bottom: 0;
    grid-row-start: 2;
    text-align: center;
    color: var(--color-font-primary-invert);
    background-color: var(--color-footer);
  }
`;

export const SignUpLink = styled(Link)`
  font-family: ${font.family.text.name};
  color: var(--color-font-primary);
  text-decoration: underline;

  @media ${device.md} {
    color: var(--color-font-primary-invert);
  }
`;
