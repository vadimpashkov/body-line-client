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

  /* @media ${device.sm} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  } */
`;

export const FormTitle = styled(Title)`
  grid-area: title;
  font-size: var(--size-title-middle);
  line-height: ${responsive(34, 64)};
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
  /* margin-top: var(--margin-middle); */
  color: var(--color-font-primary-invert);
  text-align: center;
`;

export const FormButton = styled(Button)`
  grid-area: button;
  width: 100%;
  /* margin-top: var(--margin-middle); */
`;

export const FormDescription = styled(Text)`
  grid-area: description;
  /* margin-top: var(--margin-small); */
  text-align: center;
`;
