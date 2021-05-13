import styled from 'styled-components';

import { Button, Text } from '../../styles/GlobalStyles';

import { Title } from '../Title';

import { device } from '../../styles/Variables';
import { responsive } from '../../styles/mixins';

type FormWrapperProps = {
  error?: string;
  description?: string;
};

export const FormWrapper = styled.form<FormWrapperProps>`
  display: grid;
  grid-template-areas:
    'title'
    'inputs'
    ${({ error }) => error && "'error'"}
    'button'
    ${({ description }) => description && "'description'"};
  row-gap: var(--margin-little);
  width: min(100%, 600px);
  padding: var(--padding-form);
  background-color: var(--color-background-primary-invert);
`;

export const FormTitle = styled(Title)`
  grid-area: title;
  font-size: var(--size-title-form);
  line-height: 1.2;
  text-transform: uppercase;
  user-select: none;
`;

export const FormTitleSmall = styled.span`
  text-transform: none;
  font-weight: 400;
`;

export const FormInputs = styled.div`
  grid-area: inputs;
  display: flex;
  flex-flow: column;
  row-gap: var(--margin-small);
`;

export const FormError = styled.p`
  grid-area: error;
  color: var(--color-font-primary-invert);
  text-align: center;
`;

export const FormButton = styled(Button)`
  grid-area: button;
  width: 100%;
`;

export const FormDescription = styled(Text)`
  grid-area: description;
  text-align: center;
`;
