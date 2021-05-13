import styled from 'styled-components';

import { DecorationText } from '../DecorationText';

import { device } from '../../styles/Variables';

import {
  Container,
  Image,
  PreviewImg,
  PreviewImgBlock,
  KeyframesSkeletonPulse,
  Text,
} from '../../styles/GlobalStyles';
import { Title } from '../Title';
import { HorizontalScrolling } from '../HorizontalScrolling';

export const AboutUsStyles = styled.section`
  margin-top: var(--padding-block);
`;

export const AboutUsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  gap: var(--margin-standard);

  @media ${device.ml} {
    grid-template-columns: 1fr;
    grid-template-rows: span 1fr;
  }

  @media ${device.sm} {
    grid-template-rows: 1fr;
  }
`;

export const AboutUsPreviewBlock = styled(PreviewImgBlock)``;

export const AboutUsPreviewImg = styled(PreviewImg)``;

export const AboutUsContent = styled.div`
  min-width: 0;
`;

export const AboutUsTitle = styled(Title)`
  margin-bottom: var(--margin-middle);
`;

export const TextContainer = styled.div``;

export const AboutUsText = styled(Text)`
  margin-bottom: var(--margin-small);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AboutUsImageBlock = styled.div`
  --size: 320px;

  position: relative;
  animation: ${KeyframesSkeletonPulse} var(--transition-time-skeleton)
    var(--transition-bezier-easing) infinite alternate;
  max-width: var(--size);
  min-width: var(--size);

  @media ${device.xs} and ${device.touch} {
    max-width: calc(100vw - var(--padding-container) * 2);
    min-width: calc(100vw - var(--padding-container) * 2);
  }
`;

export const AboutUsImage = styled(Image)`
  display: none;
`;

export const AboutUsDecorationText = styled(DecorationText)`
  justify-content: flex-start;
  margin-bottom: var(--margin-small);
`;

export const Gallery = styled.div`
  margin-top: var(--margin-big);
`;

export const ImagesScroll = styled(HorizontalScrolling)`
  height: 200px;

  @media ${device.xxs} {
    height: 160px;
  }
`;
