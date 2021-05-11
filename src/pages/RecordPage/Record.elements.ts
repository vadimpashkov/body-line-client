import styled from 'styled-components';

import { Title } from '../../components';

import { Button, Container } from '../../styles/GlobalStyles';
import { device } from '../../styles/Variables';

export const RecordWrapper = styled.div``;

export const RecordContainer = styled(Container)`
  display: grid;
  place-items: center;
  padding-top: var(--padding-container);
  padding-bottom: var(--padding-container);
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
`;

export const RecordCard = styled.div`
  display: grid;
  row-gap: var(--margin-little);
  background-color: var(--color-background-primary-invert);
  text-align: center;
  width: min(100%, 600px);
  padding: var(--padding-form);
  color: var(--color-font-primary-invert);
`;

export const RecordCardTitle = styled(Title)`
  font-size: var(--size-title-record);
`;

export const RecordCardDate = styled.p``;

export const RecordCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-font-primary-invert);

  @media ${device.xs} {
    flex-flow: column;
    border: none;
    /* border: 1px solid var(--color-font-primary-invert); */
    padding: var(--margin-small);
    /* row-gap: var(--margin-small); */
  }
`;

export const RecordCardText = styled.div`
  @media ${device.xs} {
    padding-bottom: calc(var(--margin-small) / 2);

    &:nth-child(2n) {
      border-top: 1px solid var(--color-font-primary-invert);
      padding-top: calc(var(--margin-small) / 2);
      padding-bottom: 0;
    }
  }
`;

export const RecordCardButton = styled(Button)``;
