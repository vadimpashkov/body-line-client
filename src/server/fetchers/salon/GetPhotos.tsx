import { FetchFunc } from '../../types';

export type GetPhotosSalonResponse = {
  id: number;
  src: string;
  alt: string;
};

export const GetPhotosSalon: FetchFunc<undefined, GetPhotosSalonResponse[]> = (client) => client.get('/salon-photos');
