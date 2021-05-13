import styled from 'styled-components';

import { Title } from '../../components';
import { device } from '../../styles/Variables';

import {
  ContainerCenter,
  KeyframesTextLoading,
  KeyframesManifestation,
  KeyframesTextSkeletonManifestation,
} from '../../styles/GlobalStyles';

export const RecordPageWrapper = styled.div`
  @media ${device.md} {
    background-color: var(--color-background-primary-invert);
  }
`;

export const RecordPageContainer = styled(ContainerCenter)`
  @media ${device.md} {
    padding: 0;
    text-align: center;
  }
`;

export const RecordPageMessage = styled(Title)`
  font-size: var(--size-title-record);
  animation: ${KeyframesManifestation} var(--transition-time-manifestation)
      var(--transition-bezier-easing),
    ${KeyframesTextSkeletonManifestation} var(--transition-time-manifestation)
      var(--transition-bezier-easing) infinite alternate;

  @media ${device.md} {
    color: var(--color-font-primary-invert);
  }
`;
