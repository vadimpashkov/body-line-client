import styled from 'styled-components';

import { Input } from '../../styles/GlobalStyles';

export const RecordFormInput = styled(Input)`
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const RecordFormSelect = styled(RecordFormInput)``;

export const RecordFormOption = styled.option`
  background-color: var(--color-background-primary-invert);
`;
