import { FetchFunc } from '../../types';

export type SignUpRequestType = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type SignUpResponseType = {
  token: string;
};

export const SignUp: FetchFunc<SignUpRequestType, SignUpResponseType> = (
  client,
  request
) => {
  const login = request.username.replace('+7', '8').replace(/\D/g, '');

  return client.post('/account/register', {
    ...request,
    username: login,
  });
};
