import { FC } from 'react';

import { DecorationTextStyles } from './DecorationText.elements';

type DecorationTextProps = {
  children: string;
  className?: string;
  length: string;
  vertical?: boolean;
  invert?: boolean;
};

export type DecorationTextStyledProps = {
  length: string;
  vertical?: boolean;
  invert?: boolean;
};

export const DecorationText: FC<DecorationTextProps> = ({
  children,
  length,
  vertical,
  invert,
  className,
}: DecorationTextProps) => {
  return (
    <DecorationTextStyles className={className} invert={invert} length={length} vertical={vertical}>
      {children}
    </DecorationTextStyles>
  );
};
