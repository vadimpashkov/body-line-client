import styled from 'styled-components';

import { device } from '../../styles/Variables';

import { Input, KeyframesManifestation } from '../../styles/GlobalStyles';
import { Form } from '../Form';

export const RecordFormWrapper = styled(Form)`
  animation: ${KeyframesManifestation} var(--transition-time-manifestation)
    var(--transition-bezier-easing);

  @media ${device.md} {
    padding: var(--margin-middle) var(--padding-container);
  }
`;

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
