import { FetchFunc } from '../../types';
import { GetRecordUserResponseType } from './GetRecordUser';

export type SetRecordRequestType = {
  messeurId: number;
  massageTypeId: number;
  date: Date;
};

// export type SetRecordResponseType = {};

export const SetRecord: FetchFunc<
  SetRecordRequestType,
  GetRecordUserResponseType
> = (client, request) => client.post('/record', request);
