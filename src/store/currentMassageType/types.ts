import { GetMassageTypesResponse } from '../../server/fetchers/massageTypes';

export const UPDATE_CURRENT_MASSAGE_TYPE = 'UPDATE_CURRENT_MASSAGE_TYPE';

export type ActionType = {
  type: string;
  payload: GetMassageTypesResponse;
};
