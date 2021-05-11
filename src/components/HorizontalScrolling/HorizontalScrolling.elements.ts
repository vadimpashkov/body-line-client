import styled from 'styled-components';

export const HorizontalScrollingBlock = styled.div`
  --gap: 1rem;

  position: relative;
  overflow: hidden;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

export const HorizontalScrollingList = styled.div`
  display: flex;
  gap: var(--gap);
  height: 100%;
`;
