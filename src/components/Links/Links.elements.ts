import styled from 'styled-components';

import { Link } from '../../styles/GlobalStyles';

import { pxToRem } from '../../styles/mixins';

export const LinksStyles = styled.div`
  display: flex;
  gap: ${pxToRem(36)};
`;

export const LinkItem = styled(Link)`
  text-transform: uppercase;
`;
