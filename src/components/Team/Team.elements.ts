import styled from 'styled-components';

import { Button, Container, Image, Text } from '../../styles/GlobalStyles';

import { Title } from '../Title';
import { SliderController } from '../SliderController';

import { responsive } from '../../styles/mixins';
import { device, font } from '../../styles/Variables';

export const TeamWrapper = styled.section``;

export const TeamContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--margin-standard);
  min-height: 720px;

  @media ${device.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: var(--margin-middle);
    /* min-height: initial; */
    /* min-height: 400px; */
  }
`;

export const TeamContent = styled.div`
  display: grid;
  grid-template: 1fr auto / 1fr 1fr;
  row-gap: var(--margin-middle);

  @media ${device.md} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    column-gap: var(--margin-middle);
  }

  @media ${device.xs} {
    grid-template: initial;
    grid-template-columns: 1fr;
  }
`;

export const TeamInfo = styled.div`
  grid-column: 1 / 3;

  @media ${device.md} {
    grid-column: 1 / -1;
  }
`;

export const TeamTitle = styled(Title)`
  margin-bottom: var(--margin-standard);
`;

export const TeamName = styled(Title)`
  margin-bottom: var(--margin-middle);
  font-weight: 500;
  font-size: var(--size-title-middle);
  line-height: 1.2;
  text-transform: none;
`;

export const TeamInfoPanel = styled.div`
  margin-bottom: var(--margin-little);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TeamSubtitle = styled.h3`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const TeamText = styled(Text)``;

export const TeamButton = styled(Button)`
  grid-row-start: 2;
  justify-self: start;

  @media ${device.md} {
    width: 100%;
  }
`;

export const TeamSliderController = styled(SliderController)`
  grid-row-start: 2;
  justify-self: end;

  @media ${device.md} {
    grid-column: 1 / -1;
    grid-row-start: 3;
    justify-self: center;
  }
`;

export const TeamImage = styled(Image)`
  user-select: none;

  @media ${device.sm} {
    height: ${responsive(200, 400)};
  }
`;
