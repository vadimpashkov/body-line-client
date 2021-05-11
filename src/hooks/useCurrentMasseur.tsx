import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import { GetMasseursResponse } from '../server';

import { SetCurrentMasseur } from '../store/currentMasseur';

export const useCurrentMasseur = () => {
  const masseur = useSelector((x: RootState) => x.masseur);
  const dispatch = useDispatch();

  const SetMasseur = (masseur: GetMasseursResponse) => {
    dispatch(SetCurrentMasseur(masseur));
  };

  return {
    masseur,
    SetMasseur,
  };
};
