import { FC } from 'react';

import { IconSvg } from './Icon.elements';

type IconProps = {
  className?: string;
  href: string;
  onClick?: () => void;
};

export const Icon: FC<IconProps> = ({ className, href, onClick }: IconProps) => {
  return (
    <IconSvg className={className} onClick={onClick}>
      <use href={href}></use>
    </IconSvg>
  );
};
