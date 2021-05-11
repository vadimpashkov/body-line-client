import { UPDATE_CURRENT_MASSAGE_TYPE, ActionType } from './types';
import { GetMassageTypesResponse } from '../../server/fetchers/massageTypes';

export function CurrentMassageTypeReducer(
  state: GetMassageTypesResponse | null = null,
  action: ActionType
) {
  if (action.type === UPDATE_CURRENT_MASSAGE_TYPE) {
    return action.payload;
  }

  return state;
}
