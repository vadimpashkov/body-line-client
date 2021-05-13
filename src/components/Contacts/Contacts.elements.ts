import styled from 'styled-components';

import { Container } from '../../styles/GlobalStyles';

import { Title } from '../Title';
import { Links } from '../Links';

import { device } from '../../styles/Variables';

export const ContactsWrapper = styled.section`
  background-color: var(--color-background-primary-invert);
  margin-top: var(--padding-block);
`;

export const ContactsContainer = styled(Container)`
  padding-top: var(--margin-big);
  padding-bottom: var(--margin-big);

  @media ${device.sm} {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const ContactsTitle = styled(Title)`
  margin-bottom: var(--margin-big);

  @media ${device.sm} {
    text-align: center;
  }
`;

export const ContactsInfoPanels = styled.div`
  display: flex;
  gap: var(--margin-big);
  margin-bottom: var(--margin-big);

  @media ${device.sm} {
    flex-flow: column;
  }
`;

export const ContactsInfoPanel = styled.div``;

export const ContactsLinks = styled(Links)``;
