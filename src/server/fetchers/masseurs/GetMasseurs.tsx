import { FetchFunc } from '../../types';

export type GetMasseursResponse = {
  id: number;
  user_id: number;
  occupation: string;
  description: string;
  users: {
    id: number;
    role_id: number;
    phone: string;
    firstname: string;
    lastname: string;
    image: string;
    created_at: Date;
    updated_at: Date;
  };
};

export const GetMasseurs: FetchFunc<undefined, GetMasseursResponse[]> = (client) => client.get('/masseurs');
