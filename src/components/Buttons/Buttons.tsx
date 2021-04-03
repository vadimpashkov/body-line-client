import { FC } from 'react';
import styled from 'styled-components';

import { font, anim } from '../../styles/Variables';
import { pxToRem } from '../../styles/mixins';

const ButtonStyled = styled.button<ButtonProps>`
  padding: ${pxToRem(16)} ${pxToRem(50)};
  text-transform: uppercase;
  font-family: ${font.family.title.name}, sans-serif;
  color: ${({ inverse }) => (inverse ? ({ theme }) => theme.palette.font : ({ theme }) => theme.palette.background)};
  background-color: ${({ inverse }) =>
    inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ border }) =>
    border ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font};
  transition: color ${anim.duration} linear, background-color ${anim.duration} linear, border ${anim.duration} linear;

  :hover {
    color: ${({ inverse }) => (inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font)};
    background-color: ${({ inverse }) =>
      inverse ? ({ theme }) => theme.palette.font : ({ theme }) => theme.palette.background};
    border-color: ${({ inverse }) =>
      inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font};
  }
`;

type ButtonProps = {
  children: string;
  className?: string;
  border?: boolean;
  inverse?: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick, className, border, inverse }: ButtonProps) => {
  return (
    <ButtonStyled className={className} border={border} inverse={inverse} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
