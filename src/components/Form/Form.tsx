import { FC } from 'react';

import {
  FormWrapper,
  FormTitle,
  FormTitleSmall,
  FormInputs,
  FormError,
  FormButton,
  FormDescription,
} from './Form.elements';

type FormProps = {
  title: {
    primary: string;
    secondary: string;
  };
  children: React.ReactNode;
  error?: string;
  button: string;
  description?: string;
  onSubmit: () => void;
};

export const Form: FC<FormProps> = ({
  title,
  children,
  error,
  button,
  description,
  onSubmit,
}: FormProps) => {
  return (
    <FormWrapper error={error} description={description} onSubmit={onSubmit}>
      <FormTitle invert>
        {title.primary}
        <br />
        <FormTitleSmall>{title.secondary}</FormTitleSmall>
      </FormTitle>
      <FormInputs>{children}</FormInputs>
      {error && <FormError>{error}</FormError>}
      <FormButton invert>{button}</FormButton>
      {description && <FormDescription>{description}</FormDescription>}
    </FormWrapper>
  );
};
