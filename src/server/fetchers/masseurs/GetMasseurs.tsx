import { FetchFunc } from '../../types';

export type GetMasseursResponse = {
  id: number;
  firstName: string;
  lastName: string;
  occupation: string;
  description: string;
  src: string;
};

export const GetMasseurs: FetchFunc<undefined, GetMasseursResponse[]> = (
  client
) => client.get('/massague');
