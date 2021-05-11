import { UPDATE_CURRENT_MASSEUR, ActionType } from './types';
import { GetMasseursResponse } from '../../server/fetchers/masseurs';

export function CurrentMasseurReducer(
  state: GetMasseursResponse | null = null,
  action: ActionType
) {
  if (action.type === UPDATE_CURRENT_MASSEUR) {
    return action.payload;
  }

  return state;
}
