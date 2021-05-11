import { UPDATE_TOKEN, ActionType } from './types';

export function AccessTokenReducer(state: string = localStorage.getItem('user_token') || '', action: ActionType) {
  if (action.type === UPDATE_TOKEN) {
    localStorage.setItem('user_token', action.payload);
    return action.payload;
  }

  return state;
}
