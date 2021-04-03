import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reduxStore';

import { SetToken } from '../reduxStore/accessToken';

export const useAccessToken = () => {
  const token = useSelector((x: RootState) => x.token);
  const dispatch = useDispatch();

  const setToken = (newToken: string) => {
    dispatch(SetToken(newToken));
  }

  return {
    token,
    setToken
  };
}