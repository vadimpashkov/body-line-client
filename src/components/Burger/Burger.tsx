import { FC } from 'react';

import { BurgerButton } from './Burger.elements';

type BurgerProps = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

export const Burger: FC<BurgerProps> = ({ open, setOpen }: BurgerProps) => {
  return (
    <BurgerButton open={open} onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>
      <div />
    </BurgerButton>
  );
};
