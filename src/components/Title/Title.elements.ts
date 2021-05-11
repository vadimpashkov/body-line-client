import styled from 'styled-components';

type TitleStylesProps = {
  invert?: boolean;
};

export const TitleStyles = styled.h1<TitleStylesProps>`
  font-size: var(--size-title-standard);
  text-transform: uppercase;
  line-height: 1;
  color: var(--color-background-primary);
  color: ${({ invert }) => (invert ? 'var(--color-font-primary-invert);' : 'var(--color-font-primary);')};
  user-select: none;
`;
