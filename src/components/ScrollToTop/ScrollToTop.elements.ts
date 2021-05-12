import styled from 'styled-components';
import { device } from '../../styles/Variables';

import { Icon } from '../Icon';

type ScrollToTopWrapperProps = {
  visible: boolean;
};

export const ScrollToTopWrapper = styled.div<ScrollToTopWrapperProps>`
  --size: 50px;

  z-index: var(--z-scroll-to-top);
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  place-items: center;
  position: fixed;
  right: var(--margin-small);
  bottom: var(--margin-small);
  width: var(--size);
  height: var(--size);
  background-color: var(--color-background-primary);
  border-radius: 50%;
  box-shadow: 0 0 8px 1px
    rgb(var(--color-font-primary-rgb) / var(--opacity-shadow));
  cursor: pointer;
  transition: transform var(--transition-standard);

  @media ${device.cursor} {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ScrollToTopIcon = styled(Icon)`
  --size: var(--size-icon-menu);
  fill: var(--color-font-primary);
  transform: rotate(90deg);
`;
