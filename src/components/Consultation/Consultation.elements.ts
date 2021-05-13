import styled from 'styled-components';

import { Container, Text } from '../../styles/GlobalStyles';

import { Title } from '../Title';

export const ConsultationWrapper = styled.section`
  background-color: var(--color-background-primary-invert);
  margin-top: var(--padding-block);
`;

export const ConsultationContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding-top: var(--margin-big);
  padding-bottom: var(--margin-big);
`;

export const ConsultationTitle = styled(Title)`
  margin-bottom: var(--margin-small);
`;

export const ConsultationText = styled(Text)`
  max-width: 370px;
  margin-bottom: var(--margin-standard);
  user-select: none;
`;
