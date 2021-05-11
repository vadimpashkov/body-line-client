import { FetchFunc } from '../../types';

export type SignInRequestType = {
  username: string;
  password: string;
};

export type SignInResponseType = {
  token: string;
};

export const SignIn: FetchFunc<SignInRequestType, SignInResponseType> = (
  client,
  request
) => {
  const login = request.username.replace('+7', '8').replace(/\D/g, '');

  return client.post('/account/login', {
    ...request,
    username: login,
  });
};
