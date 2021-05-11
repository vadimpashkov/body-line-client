import styled from 'styled-components';

import { device } from '../../styles/Variables';

export const BurgerButton = styled.button<{ open: boolean }>`
  --opacity-focus: 0.1;
  --padding: 10px;
  --size: calc(var(--height-min-tap-target) + var(--padding));

  position: relative;
  padding: var(--padding);
  display: flex;
  flex-flow: column;
  justify-content: center;
  row-gap: 4px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;

  @media ${device.touch} {
    --padding: 14px;

    row-gap: 6px;
  }

  @media ${device.cursor} {
    &:hover {
      background-color: rgb(var(--color-background-primary-rgb) / var(--opacity-focus));
    }
  }

  &::before,
  &::after {
    content: '';
    transition: transform var(--transition-standard);
  }

  &::before,
  &::after,
  div {
    --height: 2px;

    width: 100%;
    height: var(--height);
    border-radius: var(--height);
    background-color: var(--color-background-primary);
  }

  &::before {
    ${({ open }) =>
      open &&
      `
      transform: translateY(6px) rotate(-45deg);
    `};

    @media ${device.touch} {
      ${({ open }) =>
        open &&
        `
        transform: translateY(8px) rotate(-45deg);
      `};
    }
  }

  &::after {
    ${({ open }) =>
      open &&
      `
      transform: translateY(-6px) rotate(45deg);
    `};

    @media ${device.touch} {
      ${({ open }) =>
        open &&
        `
        transform: translateY(-8px) rotate(45deg);
      `};
    }
  }

  div {
    transition: opacity var(--transition-standard);

    ${({ open }) =>
      open &&
      `
      opacity: 0;
    `};
  }

  /* ${({ open }) =>
    open &&
    `
    background-color: rgb(var(--color-background-primary-rgb) / var(--opacity-focus));
  `}; */
`;
