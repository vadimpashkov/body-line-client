import styled from 'styled-components';

import { device, font } from '../../styles/Variables';

import { Logotype, Text } from '../../styles/GlobalStyles';
import { Title } from '../Title';
import { Links } from '../Links';

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background-color: var(--color-background-primary-invert);

  @media ${device.md} {
    height: initial;
    grid-template-rows: 1fr;
    background-color: var(--color-footer);
  }
`;

type SidebarContainerProps = {
  none?: boolean;
};

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: grid;
  padding: var(--margin-middle) var(--margin-standard);

  @media ${device.md} {
    padding: 0;
    ${({ none }) => none && 'display: none;'}
  }
`;

export const SidebarQuote = styled(Title)`
  padding-right: var(--margin-standard);
  font-family: ${font.family.text.name};
  font-weight: 500;
  line-height: ${font.lineHeight};
  font-size: var(--size-title-sidebar);
  text-transform: none;
  user-select: none;

  @media ${device.md} {
    display: none;
  }
`;

export const LogotypeLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: var(--margin-standard);
  margin-bottom: var(--margin-little);

  @media ${device.md} {
    height: 100%;
    /* align-items: flex-end; */
    justify-content: center;
    margin: 0;
  }
`;

export const SidebarLogotype = styled(Logotype)``;

export const SidebarArt = styled.img`
  align-self: center;
  justify-self: center;
  max-height: 450px;
  opacity: var(--opacity-standard);
  user-select: none;
  pointer-events: none;

  @media ${device.md} {
    display: none;
  }

  @media (max-height: 900px) {
    display: none;
  }
`;

export const SidebarLinks = styled(Links)`
  align-self: end;
`;
