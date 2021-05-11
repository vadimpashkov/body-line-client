import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import { SetToken } from '../store/accessToken';

export const useAccessToken = () => {
  const token = useSelector((x: RootState) => x.token);
  const dispatch = useDispatch();

  const setToken = (newToken: string) => {
    dispatch(SetToken(newToken));
  };

  return {
    token,
    setToken,
  };
};
