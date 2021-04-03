import { FetchFunc } from '../../types';

type Request = {
  phone: string;
  password: string;
  password_confirmation: string;
  firstname: string;
  lastname: string;
};

export type RegResponseType = {
  access_token: string;
  expires_in: number;
};

export const Register: FetchFunc<Request, RegResponseType> = (client, request) =>
  client.post('/auth/register', request);
