import { FC, useState } from 'react';

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
  className?: string;
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
  className,
  title,
  children,
  error,
  button,
  description,
  onSubmit,
}: FormProps) => {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <FormWrapper
      error={error}
      description={description}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
        setIsSubmit(true);
      }}
      className={className}
    >
      <FormTitle invert>
        {title.primary}
        <br />
        <FormTitleSmall>{title.secondary}</FormTitleSmall>
      </FormTitle>
      <FormInputs>{children}</FormInputs>
      {error && <FormError>{error}</FormError>}
      <FormButton invert disabled={isSubmit}>
        {button}
      </FormButton>
      {description && <FormDescription>{description}</FormDescription>}
    </FormWrapper>
  );
};
