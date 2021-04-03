import { createGlobalStyle } from 'styled-components';

import { font, anim, device } from './Variables';
import { responsive } from './mixins';

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    appearance: none;

    &-thumb {
      background-color: ${({ theme }) => theme.palette.primary};
      border-radius: 10px;
      border: 6px solid ${({ theme }) => theme.palette.background};
    }

    &-track {
      border-radius: 10px;
      background-color: ${({ theme }) => theme.palette.background};
    }
  }

  ::-webkit-scrollbar:vertical {
    width: 16px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 16px;
  }

  html {
    font-size: ${font.size}px;
    color: ${({ theme }) => theme.palette.font};

    @media ${device.lg} {
      font-size: ${font.size - 1}px;
    }

    @media ${device.md} {
      font-size: ${font.size - 2}px;
    }
  }

  body {
    font-family: ${font.family.text.name}, sans-serif;
    font-weight: ${font.family.text.weight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: inherit;
    line-height: ${font.lineHeight};
    background-color: ${({ theme }) => theme.palette.background};
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

  .visually-hidden {
    position: absolute !important;
    overflow: hidden;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(1px, 1px, 1px, 1px);
  }

  .main {
    display: grid;
    row-gap: ${responsive(40, 90)};
  }

  .img,
  .icon {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .img {
    filter: grayscale(1);
    transition: filter ${anim.duration} linear;
    cursor: pointer;

    :hover {
      filter: grayscale(0);
    }
  }

  .link {
    font-family: ${font.family.title.name}, sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.background};
    text-decoration: none;
    transition: color ${anim.duration} linear;

    :hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export default GlobalStyles;
