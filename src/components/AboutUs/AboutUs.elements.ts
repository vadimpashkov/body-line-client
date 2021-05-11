import styled from 'styled-components';

import { DecorationText } from '../DecorationText';

import { responsive } from '../../styles/mixins';
import { device, breakpoints } from '../../styles/Variables';

import { Container, Image, PreviewImg, Text } from '../../styles/GlobalStyles';
import { Title } from '../Title';
import { HorizontalScrolling } from '../HorizontalScrolling';

export const AboutUsStyles = styled.section``;

type AboutUsContainerProps = {
  height?: number;
};

export const AboutUsContainer = styled(Container)<AboutUsContainerProps>`
  @media (min-width: ${breakpoints.ml}px) {
    ${({ height }) => height && height > 0 && `height: ${height}px;`};
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--margin-standard);

  @media ${device.ml} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  @media ${device.sm} {
    grid-template-rows: 1fr;
  }
`;

export const AboutUsPreviewImg = styled(PreviewImg)`
  @media (min-width: ${breakpoints.ml}px) {
    height: 100%;
    min-height: 0;
  }
  /* @media (min-width: ${breakpoints.ml}px) {
    ${({ height }) => height && height > 0 && `height: ${height}px;`};
  } */
`;

export const AboutUsContent = styled.div`
  min-width: 0;
`;

export const AboutUsTitle = styled(Title)`
  margin-bottom: var(--margin-middle);
`;

export const TextContainer = styled.div`
  margin-bottom: var(--margin-big);
`;

export const AboutUsText = styled(Text)`
  margin-bottom: var(--margin-small);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AboutUsImage = styled(Image)`
  max-width: 320px;
  min-width: 320px;
  width: 320px;

  @media ${device.xxs} {
    max-width: 280px;
    min-width: 280px;
    width: 280px;
  }
`;

export const AboutUsDecorationText = styled(DecorationText)`
  justify-content: flex-start;
  margin-bottom: var(--margin-small);
`;

export const Gallery = styled.div``;

export const ImagesScroll = styled(HorizontalScrolling)`
  height: 200px;

  @media ${device.xxs} {
    height: 160px;
  }
`;
