import styled from 'styled-components';

import { Title } from '../../components';

import {
  Button,
  ContainerCenter,
  KeyframesManifestation,
} from '../../styles/GlobalStyles';
import { device } from '../../styles/Variables';

export const UserRecordPageWrapper = styled.div`
  @media ${device.md} {
    background-color: var(--color-background-primary-invert);
  }
`;

export const UserRecordPageContainer = styled(ContainerCenter)`
  @media ${device.md} {
    padding: 0;
    text-align: center;
  }
`;

export const UserRecordPageCard = styled.div`
  display: grid;
  row-gap: var(--margin-little);
  background-color: var(--color-background-primary-invert);
  text-align: center;
  width: min(100%, 600px);
  padding: var(--padding-form);
  color: var(--color-font-primary-invert);
  animation: ${KeyframesManifestation} var(--transition-time-manifestation)
    var(--transition-bezier-easing);

  @media ${device.md} {
    padding: var(--margin-middle) var(--padding-container);
  }
`;

export const UserRecordPageCardTitle = styled(Title)`
  font-size: var(--size-title-record);
`;

export const UserRecordPageCardDate = styled.p``;

export const UserRecordPageCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-font-primary-invert);

  @media ${device.xs} {
    flex-flow: column;
    border: none;
    padding: var(--margin-small) 0;
  }
`;

export const UserRecordPageCardText = styled.div`
  @media ${device.xs} {
    padding-bottom: calc(var(--margin-small) / 2);

    &:nth-child(2n) {
      border-top: 1px solid var(--color-font-primary-invert);
      padding-top: calc(var(--margin-small) / 2);
      padding-bottom: 0;
    }
  }
`;

export const UserRecordPageCardButton = styled(Button)``;
