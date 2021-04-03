import styled from 'styled-components';
import { breakpoints } from '../../styles/Variables';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-right: 30px;
  padding-left: 30px;
  max-width: calc(${breakpoints.xl}px + 60px);
`;
