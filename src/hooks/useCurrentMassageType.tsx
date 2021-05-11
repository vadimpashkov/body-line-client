import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import { GetMassageTypesResponse } from '../server';

import { SetCurrentMassageType } from '../store/currentMassageType';

export const useCurrentMassageType = () => {
  const massageType = useSelector((x: RootState) => x.massageType);
  const dispatch = useDispatch();

  const SetMassageType = (massageType: GetMassageTypesResponse) => {
    dispatch(SetCurrentMassageType(massageType));
  };

  return {
    massageType,
    SetMassageType,
  };
};
