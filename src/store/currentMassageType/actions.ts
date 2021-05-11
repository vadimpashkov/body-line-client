import { ActionType, UPDATE_CURRENT_MASSAGE_TYPE } from './types';
import { GetMassageTypesResponse } from '../../server/fetchers/massageTypes';

export function SetCurrentMassageType(
  massageType: GetMassageTypesResponse
): ActionType {
  return {
    type: UPDATE_CURRENT_MASSAGE_TYPE,
    payload: massageType,
  };
}
