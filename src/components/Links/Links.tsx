import { FC } from 'react';

import { LinksStyles, LinkItem } from './Links.elements';

type LinksProps = {
  className?: string;
};

export const Links: FC<LinksProps> = ({ className }: LinksProps) => (
  <LinksStyles className={className}>
    <LinkItem href="https://vk.com">VK</LinkItem>
    <LinkItem href="https://instagram.com">Instagram</LinkItem>
  </LinksStyles>
);
