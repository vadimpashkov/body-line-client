import styled from 'styled-components';

import { Text } from '../../styles/GlobalStyles';
import { Icon } from '../Icon';

import { device, font } from '../../styles/Variables';

export const InfoPanelWrapper = styled.div`
  display: flex;

  @media ${device.sm} {
    flex-flow: column;
    align-items: center;
    text-align: center;
  }
`;

export const InfoPanelIcon = styled(Icon)`
  --size: var(--size-icon-info-panel);

  display: inline-block;
  margin-right: var(--margin-small);

  fill: var(--color-font-primary-invert);

  @media ${device.sm} {
    --size: calc(var(--size-icon-info-panel) * 2);
    margin-bottom: var(--margin-small);
    margin-right: 0;
  }
`;

export const InfoPanelContent = styled.div``;

export const InfoPanelTitle = styled.p`
  display: inline-block;
  margin-bottom: var(--margin-small);
  font-family: ${font.family.title.name}, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-font-primary-invert);

  &::after {
    content: ':';
  }
`;

export const InfoPanelDescription = styled(Text)`
  max-width: 176px;

  @media ${device.sm} {
    max-width: initial;
  }
`;
