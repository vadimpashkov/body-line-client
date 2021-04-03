import { FC } from 'react';
import styled from 'styled-components';

import { responsive } from '../../styles/mixins';

const TitleH1Styles = styled.h1`
  font-size: ${responsive(40, 90)};
  line-height: ${responsive(50, 100)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.background};
`;

const TitleH2Styles = styled.h2<TitleProps>`
  font-size: ${responsive(26, 64)};
  text-transform: uppercase;
  color: ${({ inverse }) => (inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font)};
`;

const TitleH3Styles = styled.h3`
  font-size: ${responsive(20, 54)};
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.font};
`;

type TitleProps = {
  children: string;
  className?: string;
  inverse?: boolean;
};

export const TitleH1: FC<TitleProps> = ({ children, className }: TitleProps) => (
  <TitleH1Styles className={className}>{children}</TitleH1Styles>
);

export const TitleH2: FC<TitleProps> = ({ children, className, inverse }: TitleProps) => (
  <TitleH2Styles className={className} inverse={inverse}>
    {children}
  </TitleH2Styles>
);

export const TitleH3: FC<TitleProps> = ({ children, className }: TitleProps) => (
  <TitleH3Styles className={className}>{children}</TitleH3Styles>
);
