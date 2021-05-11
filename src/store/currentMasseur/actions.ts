import { ActionType, UPDATE_CURRENT_MASSEUR } from './types';
import { GetMasseursResponse } from '../../server/fetchers/masseurs';

export function SetCurrentMasseur(masseur: GetMasseursResponse): ActionType {
  return {
    type: UPDATE_CURRENT_MASSEUR,
    payload: masseur,
  };
}
