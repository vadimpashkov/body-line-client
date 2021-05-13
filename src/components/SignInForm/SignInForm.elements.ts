import styled from 'styled-components';

import { Input } from '../../styles/GlobalStyles';
import { Form } from '../Form';

import { device } from '../../styles/Variables';

export const SignInInput = styled(Input)``;

export const SignInFormWrapper = styled(Form)`
  @media ${device.md} {
    padding: var(--margin-middle) var(--padding-container);
  }
`;
