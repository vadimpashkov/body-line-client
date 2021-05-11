import styled from 'styled-components';

import { font } from '../../styles/Variables';
import { pxToRem } from '../../styles/mixins';

import { DecorationTextStyledProps } from './DecorationText';

export const DecorationTextStyles = styled.p<DecorationTextStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: ${font.family.title.name};
  color: ${({ invert }) => (invert ? 'var(--color-font-primary-invert)' : 'var(--color-font-primary)')};
  text-transform: uppercase;
  writing-mode: ${({ vertical }) => (vertical ? 'vertical-lr' : 'initial')};
  cursor: default;

  :after {
    content: '';
    display: inline-block;
    margin-top: ${({ vertical }) => (vertical ? pxToRem(16) : '0')};
    margin-left: ${({ vertical }) => (vertical ? '0' : pxToRem(16))};
    width: ${({ vertical }) => (vertical ? '1px' : ({ length }) => length)};
    height: ${({ vertical }) => (vertical ? ({ length }) => length : '1px')};
    background-color: ${({ invert }) =>
      invert ? 'var(--color-background-primary)' : 'var(--color-background-primary-invert)'};
  }
`;
