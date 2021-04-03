import { FC } from 'react';
import styled from 'styled-components';

const TextStyles = styled.p<TextProps>`
  color: ${({ primary }) => (primary ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.primary)};
`;

type TextProps = {
  children: string;
  className?: string;
  primary?: boolean;
};

export const Text: FC<TextProps> = ({ children, className, primary }: TextProps) => (
  <TextStyles className={className} primary={primary}>
    {children}
  </TextStyles>
);
