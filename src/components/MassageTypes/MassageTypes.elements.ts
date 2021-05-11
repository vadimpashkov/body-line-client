import styled from 'styled-components';

import {
  Button,
  Container,
  Image,
  PreviewImg,
  Text,
} from '../../styles/GlobalStyles';
import { Title } from '../Title';

import { breakpoints, device, font } from '../../styles/Variables';
import { DecorationText } from '../DecorationText';
import { HorizontalScrolling } from '../HorizontalScrolling';

export const MassageTypesWrapper = styled.section``;

export const MassageTypesContainer = styled(Container)`
  display: grid;
`;

export const MassageTypesTitle = styled(Title)`
  margin-bottom: var(--margin-big);
`;

export const MassageTypesPreviewImg = styled(PreviewImg)`
  @media (min-width: ${breakpoints.ml}px) {
    height: 100%;
    min-height: 0;
  }
`;

type MassageTypesContent = {
  height?: number;
};

export const MassageTypesContent = styled.div<MassageTypesContent>`
  @media (min-width: ${breakpoints.ml}px) {
    ${({ height }) => height && height > 0 && `height: ${height}px;`};
    min-height: 400px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--margin-standard);
  /* margin-bottom: var(--margin-standard); */

  @media ${device.ml} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  @media ${device.sm} {
    grid-template-rows: 1fr;
    margin-bottom: 0;
  }
`;

export const MassageTypesInfo = styled.div`
  min-width: 0;
`;

export const MassageTypesName = styled(Title)`
  font-weight: 500;
  font-size: var(--size-title-middle);
  line-height: ${font.lineHeight};
  margin-bottom: var(--margin-small);
`;

export const MassageTypesText = styled(Text)`
  white-space: pre-wrap;
  margin-bottom: var(--margin-middle);
`;

export const MassageTypesButton = styled(Button)`
  @media ${device.sm} {
    width: 100%;
  }
`;

export const MassageTypesGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  grid-row-start: 2;
  margin-bottom: var(--margin-standard);

  /* @media ${device.sm} {
    grid-row-start: 2;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-bottom: var(--margin-standard);
  } */
`;

export const MassageTypesDecorationText = styled(DecorationText)`
  margin-left: var(--margin-small);

  @media ${device.sm} {
    display: none;
    /* justify-content: flex-start;
    writing-mode: initial;
    margin-bottom: var(--margin-small);

    &:after {
      margin-top: 0;
      margin-left: var(--margin-small);
      width: 45px;
      height: 1px;
    } */
  }
`;

export const MassageTypesImagesScroll = styled(HorizontalScrolling)`
  height: 200px;

  @media ${device.xxs} {
    height: 160px;
  }
`;

export const MassageTypesBlockImage = styled.div`
  position: relative;

  &:after {
    content: attr(data-massage-name);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: var(--margin-small);
    font-family: ${font.family.title.name};
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    color: var(--color-font-primary-invert);
    background-color: rgb(var(--color-font-primary-rgb) / 0.7);
    transition: opacity var(--transition-standard);
    cursor: pointer;
  }
`;

export const MassageTypesImage = styled(Image)`
  max-width: 320px;
  min-width: 320px;
  width: 320px;

  @media ${device.xxs} {
    max-width: 280px;
    min-width: 280px;
    width: 280px;
  }
`;
