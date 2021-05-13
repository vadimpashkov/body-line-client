import styled from 'styled-components';

import { Input } from '../../styles/GlobalStyles';
import { Form } from '../Form';

import { device } from '../../styles/Variables';

export const SignUpInput = styled(Input)``;

export const SignUpFormWrapper = styled(Form)`
  @media ${device.md} {
    padding: var(--margin-middle) var(--padding-container);
  }
`;
