import { FC, ReactElement } from 'react';

import { InputRow, InputError } from './Input.elements';

export type InputProps = {
  children: ReactElement;
  message?: string;
};

export const Input: FC<InputProps> = ({ children, message }: InputProps) => {
  return (
    <InputRow>
      {message && <InputError>{message}</InputError>}
      {children}
    </InputRow>
  );
};
