import { FC } from 'react';
import styled from 'styled-components';

import { pxToRem } from '../../styles/mixins';
import { font } from '../../styles/Variables';

const LinksStyles = styled.div`
  display: inline-block;
`;

const Link = styled.a`
  margin-right: ${pxToRem(36)};

  :last-child {
    margin-right: 0;
  }
`;

type LinksProps = {
  className?: string;
};

export const Links: FC<LinksProps> = ({ className }: LinksProps) => (
  <LinksStyles className={className}>
    <Link className="link" href="vk.com">
      VK
    </Link>
    <Link className="link" href="vk.com">
      Instagram
    </Link>
  </LinksStyles>
);
