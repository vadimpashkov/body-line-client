import styled from 'styled-components';

import { Icon } from '../Icon';

export const SliderControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: var(--margin-little);
  cursor: default;
`;

const SliderControllerIcon = styled(Icon)`
  --size: var(--size-icon-slider-controller);

  fill: var(--color-font-primary);
  transition: fill var(--transition-standard);
  cursor: pointer;

  &:hover {
    fill: var(--color-primary);
  }
`;

export const ArrowLeft = styled(SliderControllerIcon)``;

export const ArrowRight = styled(SliderControllerIcon)``;

export const Count = styled.div`
  font-size: var(--size-icon-slider-controller);
  font-weight: 500;
  user-select: none;
`;

export const CountSmallText = styled.span`
  font-size: 1rem;
  color: var(--color-primary);
`;
