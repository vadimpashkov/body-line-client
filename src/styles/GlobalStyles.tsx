import styled, { createGlobalStyle, keyframes } from 'styled-components';

import { font, device, breakpoints } from './Variables';
import { responsive, hexToRgb } from './mixins';

import { ReactComponent as LogoIcon } from '../assets/svg/logo.svg';

export const GlobalStyles = createGlobalStyle`
  :root {
    --z-scroll-to-top: 300;
    --z-header: 200;
    --z-menu: 100;
    --z-backdrop: 90;
    --z-banner-content: 2;
    --z-below: -1;

    --opacity-standard: 0.6;
    --opacity-focus: 0.08;
    --opacity-shadow: 0.1;

    --width-container: ${breakpoints.xl}px;

    --height-header: 70px;
    --height-footer: 80px;
    --height-min-tap-target: 32px;

    --margin-big: ${responsive(54, 72)};
    --margin-standard: ${responsive(36, 54)};
    --margin-middle: ${responsive(24, 36)};
    --margin-little: ${responsive(18, 24)};
    --margin-small: 18px;

    --padding-container: 30px;
    --padding-form: ${responsive(24, 72)};

    --color-primary: ${({ theme }) => theme.color.primary};
    --color-primary-rgb: ${({ theme }) => hexToRgb(theme.color.primary)};
    --color-font-primary: ${({ theme }) => theme.color.font.primary};
    --color-font-primary-rgb: ${({ theme }) =>
      hexToRgb(theme.color.font.primary)};
    --color-font-primary-invert: ${({ theme }) => theme.color.font.invert};
    --color-font-secondary: ${({ theme }) => theme.color.font.secondary};
    --color-background-primary: ${({ theme }) =>
      theme.color.background.primary};
    --color-background-primary-rgb: ${({ theme }) =>
      hexToRgb(theme.color.background.primary)};
    --color-background-primary-invert: ${({ theme }) =>
      theme.color.background.invert};
    --color-background-primary-invert-rgb: ${({ theme }) =>
      hexToRgb(theme.color.background.invert)};

    --size-title-standard: ${responsive(32, 64)};
    --size-title-middle: ${responsive(24, 54)};
    --size-title-little: ${responsive(18, 36)};
    --size-title-banner: ${responsive(48, 90)};
    --size-title-record: ${responsive(24, 36)};

    --size-icon-standard: 18px;
    --size-icon-menu: 24px;
    --size-icon-info-panel: var(--size-icon-menu);
    --size-icon-slider-controller: var(--height-min-tap-target);

    --transition-time-standard: 0.3s;
    --transition-time-fast: 0.2s;
    --transition-time-skeleton: 2s;
    --transition-bezier-easing: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bezier-rubber: cubic-bezier(1, 0.17, 0.16, 0.83);
    --transition-standard: var(--transition-time-standard) var(--transition-bezier-rubber);
    --transition-standard-easing: var(--transition-time-standard) var(--transition-bezier-easing);
    --transition-fast: var(--transition-time-fast) var(--transition-bezier-rubber);

    --border-radius-standard: 10px;

    @media ${device.touch} {
      /* --height-header: 80px; */
      --height-min-tap-target: 48px;
    }
  }

  html,
  body {
    color: var(--color-font-primary);
    font-weight: ${font.family.text.weight};
    font-size: ${font.size}px;
    font-family: ${font.family.text.name}, sans-serif;
    -webkit-tap-highlight-color: transparent;

    /* @media ${device.lg} {
      font-size: ${font.size - 1}px;
    }

    @media ${device.md} {
      font-size: ${font.size - 2}px;
    } */
  }

  html {
    line-height: ${font.lineHeight};
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: var(--color-body);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${font.family.title.name}, sans-serif;
    font-weight: ${font.family.title.weight};
  }

  ::placeholder {
    color: var(--color-font-primary-invert);
    /* color: var(--color-font-secondary); */
  }

  ::selection {
    color: var(--color-font-white);
    background-color: var(--color-primary);
  }

  .visually-hidden {
    position: absolute !important;
    overflow: hidden;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(1px, 1px, 1px, 1px);
  }

  .no-scroll {
    overflow: hidden;

    @media ${device.cursor} {
      margin-right: 14px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }
`;

export const skeletonPulse = keyframes`
  from {
    background-color: var(--color-font-secondary);
  }
  50% {
    background-color: var(--color-background-primary-invert);
  }
  to {
    background-color: var(--color-font-secondary);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-right: var(--padding-container);
  padding-left: var(--padding-container);
  max-width: calc(var(--width-container) + var(--padding-container) * 2);
`;

export const ContainerCenter = styled(Container)`
  display: grid;
  place-items: center;
  padding-top: var(--padding-container);
  padding-bottom: var(--padding-container);
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
`;

export const Main = styled.main`
  display: grid;
  row-gap: ${responsive(54, 90)};
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
`;

export const Text = styled.p<{ primary?: boolean }>`
  color: ${({ primary }) =>
    primary
      ? 'var(--color-font-primary-invert)'
      : 'var(--color-font-secondary)'};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  filter: grayscale(1);
  transition: filter var(--transition-standard);
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
  }
`;

export const Link = styled.a`
  font-family: ${font.family.title.name}, sans-serif;
  /* font-weight: 500;
  text-transform: uppercase; */
  color: var(--color-font-primary-invert);
  transition: color var(--transition-standard);

  @media ${device.cursor} {
    &:hover {
      color: var(--color-primary);
    }
  }
`;

type ButtonProps = {
  border?: string;
  invert?: boolean;
  disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  min-width: 200px;
  padding: var(--margin-small);
  text-transform: uppercase;
  text-align: center;
  font-family: ${font.family.title.name}, sans-serif;
  color: ${({ invert }) =>
    invert ? 'var(--color-font-primary)' : 'var(--color-font-primary-invert)'};
  background-color: ${({ invert }) =>
    invert
      ? 'var(--color-background-primary)'
      : 'var(--color-background-primary-invert)'};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ border }) =>
    border
      ? 'var(--color-background-primary)'
      : 'var(--color-background-primary-invert)'};
  transition: color var(--transition-standard),
    background-color var(--transition-standard),
    border var(--transition-standard);
  user-select: none;
  ${({ disabled }) => disabled && 'opacity: 0.8;'}

  @media ${device.xs} {
    min-width: initial;
  }

  @media ${device.cursor} {
    &:hover {
      color: ${({ invert }) =>
        invert
          ? 'var(--color-background-primary)'
          : 'var(--color-background-primary-invert)'};
      background-color: ${({ invert }) =>
        invert
          ? 'var(--color-background-primary-invert)'
          : 'var(--color-background-primary)'};
      border-color: ${({ invert }) =>
        invert
          ? 'var(--color-background-primary)'
          : 'var(--color-background-primary-invert)'};
    }
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: var(--color-background-primary);
`;

export const Logotype = styled(LogoIcon)`
  width: ${responsive(90, 100)};
  fill: var(--color-font-primary-invert);
  transition: fill var(--transition-standard);

  @media ${device.cursor} {
    &:hover {
      fill: var(--color-primary);
    }
  }
`;

export const PreviewImgBlock = styled.div`
  position: relative;
  cursor: default;
  animation: ${skeletonPulse} var(--transition-time-skeleton)
    var(--transition-bezier-easing) infinite alternate;

  @media ${device.ml} {
    display: none;
    /* width: 100%; */
    /* height: ${responsive(260, 470)}; */
  }

  /* @media ${device.sm} {
    display: none;
  } */
`;

export const PreviewImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

export const Input = styled.input`
  padding: var(--margin-small);
  min-width: 280px;
  width: 100%;
  color: var(--color-font-primary-invert);
  background-color: transparent;
  border: 1px solid var(--color-background-primary);

  @media ${device.xs} {
    min-width: initial;
  }
`;
