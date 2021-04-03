import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useAccessToken } from '../hooks';

type Props = {
  children: JSX.Element;
  validation: (token: string) => boolean;
  redirect?: string;
};

export const Secure: FC<Props> = ({ children, validation, redirect }: Props) => {
  const { token } = useAccessToken();
  const validationResult = validation(token);

  const validWay = validationResult ? children : <Redirect to={String(redirect)} />;

  return validWay;
};
