import styled from 'styled-components';

import { Container, Link } from '../../styles/GlobalStyles';

import { device, font } from '../../styles/Variables';

export const SignInWrapper = styled.section`
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

export const SignInContainer = styled(Container)`
  margin: 0;
  display: grid;
  align-items: center;
  justify-items: center;

  @media ${device.md} {
    padding: 0;
    text-align: center;
  }
`;

export const SignInText = styled.p`
  color: var(--color-font-primary);
  padding: var(--margin-middle) var(--padding-container);
  text-align: right;
  background-color: var(--color-background-primary);

  @media ${device.md} {
    position: sticky;
    bottom: 0;
    grid-row-start: 2;
    text-align: center;
    color: var(--color-font-primary-invert);
    background-color: var(--color-footer);
  }
`;

export const SignInLink = styled(Link)`
  font-family: ${font.family.text.name};
  color: var(--color-font-primary);
  text-decoration: underline;

  @media ${device.md} {
    color: var(--color-font-primary-invert);
  }
`;
