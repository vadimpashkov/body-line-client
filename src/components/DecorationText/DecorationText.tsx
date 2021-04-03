import { FC } from 'react';
import styled from 'styled-components';

import { font } from '../../styles/Variables';
import { pxToRem } from '../../styles/mixins';

const DecorationTextStyles = styled.p<DecorationTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: ${font.family.title.name};
  color: ${({ inverse }) => (inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font)};
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
    background-color: ${({ inverse }) =>
      inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font};
  }
`;

type DecorationTextProps = {
  children: string;
  length: string;
  className?: string;
  vertical?: boolean;
  inverse?: boolean;
};

const DecorationText: FC<DecorationTextProps> = ({
  className,
  children,
  length,
  vertical,
  inverse,
}: DecorationTextProps) => {
  return (
    <DecorationTextStyles className={className} inverse={inverse} length={length} vertical={vertical}>
      {children}
    </DecorationTextStyles>
  );
};

export default DecorationText;
