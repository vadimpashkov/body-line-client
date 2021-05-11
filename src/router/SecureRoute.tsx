import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useAccessToken } from '../hooks';

type SecureProps = {
  children: JSX.Element;
  validation: (token: string) => boolean;
  redirect?: string;
};

export const Secure: FC<SecureProps> = ({ children, validation, redirect }: SecureProps) => {
  const { token } = useAccessToken();
  const validationResult = validation(token);

  const validWay = validationResult ? children : <Redirect to={String(redirect)} />;

  return validWay;
};
