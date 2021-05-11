import { FetchFunc } from '../../types';

export type GetRecordUserRequestType = {
  id: number;
};

export const DelRecordUser: FetchFunc<GetRecordUserRequestType, undefined> = (
  client,
  request
) => client.post('/record/' + request.id, {});
