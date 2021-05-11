import styled from 'styled-components';

import { Icon } from '../Icon';
import { IconSvg } from '../Icon/Icon.elements';

import { device, font } from '../../styles/Variables';

export const NavbarBlock = styled.nav<{ open: boolean }>`
  position: absolute;
  top: calc(var(--height-header) + var(--padding-container) / 2);
  right: calc(var(--padding-container));
  transform-origin: right top;

  z-index: var(--z-menu);
  width: min(calc(100% - var(--padding-container) * 2), 300px);
  display: flex;
  flex-flow: column;
  padding: 8px 0;
  overflow: hidden;
  color: var(--color-font-primary);
  background-color: var(--color-background-primary);
  border-radius: var(--border-radius-standard);
  box-shadow: 0 0 8px 1px rgb(var(--color-font-primary-rgb) / var(--opacity-shadow));
  transition: transform var(--transition-standard), opacity var(--transition-fast);

  ${({ open }) =>
    open
      ? `
    transform: scale(1);
    opacity: 1;
  `
      : `
    transform: scale(0);
    opacity: 0;
  `};
`;

export const NavbarLink = styled.a`
  font-family: ${font.family.text.name}, sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 1rem 1.2rem 1rem 1rem;
  column-gap: 2rem;
  color: currentColor;
  cursor: pointer;
  user-select: none;

  @media ${device.cursor} {
    &:hover {
      background-color: rgb(var(--color-font-primary-rgb) / var(--opacity-focus));
    }
  }
`;

export const NavbarIcon = styled(Icon)`
  --size: var(--size-icon-menu);

  fill: var(--color-font-secondary);
`;
