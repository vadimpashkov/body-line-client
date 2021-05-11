import { GetMasseursResponse } from '../../server/fetchers/masseurs';

export const UPDATE_CURRENT_MASSEUR = 'UPDATE_CURRENT_MASSEUR';

export type ActionType = {
  type: string;
  payload: GetMasseursResponse;
};
