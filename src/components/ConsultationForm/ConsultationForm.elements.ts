import styled from 'styled-components';

import { Button, Container, Text } from '../../styles/GlobalStyles';

import { device } from '../../styles/Variables';

export const ConsultationFormWrapper = styled.div``;

export const ConsultationFormContainer = styled.div`
  display: flex;
  gap: var(--margin-small);
  margin-bottom: var(--margin-little);

  @media ${device.xs} {
    flex-flow: column;
    width: 100%;
  }
`;

export const ConsultationButton = styled(Button)``;

export const ConsultationText = styled(Text)`
  user-select: none;
  max-width: 500px;
`;
