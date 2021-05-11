import styled from 'styled-components';

import { Container, Logotype } from '../../styles/GlobalStyles';

import { responsive } from '../../styles/mixins';

import { device } from '../../styles/Variables';

export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-background-primary-invert);
  z-index: 200;
`;

export const HeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);
`;

export const LogotypeLink = styled.a`
  display: grid;
  place-items: center;
`;

export const HeaderLogotype = styled(Logotype)``;

export const Backdrop = styled.div<{ open: boolean }>`
  z-index: var(--z-backdrop);
  position: fixed;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  /* backdrop-filter: blur(8px); */
  /* background-color: rgb(var(--color-background-primary-invert-rgb) / 0.08); */
`;
