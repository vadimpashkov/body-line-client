import { FetchFunc } from '../../types';

type Request = {
  phone: string;
  password: string;
};

export type LoginResponseType = {
  access_token: string;
  expires_in: number;
};

export const Login: FetchFunc<Request, LoginResponseType> = (client, request) => client.post('/auth/login', request);
