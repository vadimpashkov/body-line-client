import { FetchFunc } from '../../types';

export type GetRecordUserResponseType = {
  id: number;
  messeurId: number;
  massageTypeId: number;
  date: Date;
  createdAt: Date;
  massageTypeName: string;
  masseurFirstName: string;
  masseurLastName: string;
};

export const GetRecordUser: FetchFunc<undefined, GetRecordUserResponseType[]> =
  (client) => client.get('/record');
