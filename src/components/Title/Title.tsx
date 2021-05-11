import { FC } from 'react';

import { TitleStyles } from './Title.elements';

// const TitleH2Styles = styled.h2<TitleProps>`
//   font-size: ${responsive(26, 64)};
//   text-transform: uppercase;
//   color: ${({ inverse }) => (inverse ? ({ theme }) => theme.palette.background : ({ theme }) => theme.palette.font)};
// `;

// const TitleH3Styles = styled.h3`
//   font-size: ${responsive(20, 54)};
//   font-weight: 500;
//   text-transform: uppercase;
//   color: ${({ theme }) => theme.palette.font};
// `;

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
};

export const Title: FC<TitleProps> = ({ children, className, invert }: TitleProps) => (
  <TitleStyles className={className} invert={invert}>
    {children}
  </TitleStyles>
);
