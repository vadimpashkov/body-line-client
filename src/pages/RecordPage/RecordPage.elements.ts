import styled from 'styled-components';

import { Title } from '../../components';

import {
  ContainerCenter,
  KeyframesTextLoading,
  KeyframesManifestation,
  KeyframesTextSkeletonManifestation,
} from '../../styles/GlobalStyles';

export const RecordPageWrapper = styled.div``;

export const RecordPageContainer = styled(ContainerCenter)``;

export const RecordPageMessage = styled(Title)`
  font-size: var(--size-title-record);
  animation: ${KeyframesManifestation} var(--transition-time-manifestation)
      var(--transition-bezier-easing),
    ${KeyframesTextSkeletonManifestation} var(--transition-time-manifestation)
      var(--transition-bezier-easing) infinite alternate;
`;
