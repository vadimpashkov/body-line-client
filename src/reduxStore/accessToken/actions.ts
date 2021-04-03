import { ActionType, UPDATE_TOKEN } from './types';

export function SetToken(token: string): ActionType {
  return {
    type: UPDATE_TOKEN,
    payload: token,
  };
}
