import { FetchFunc } from '../../types';

export type GetMassageTypesResponse = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const GetMassageTypes: FetchFunc<undefined, GetMassageTypesResponse[]> = (client) => client.get('/massagetypes');
