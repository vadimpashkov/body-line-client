import { FC } from 'react';
import { Link } from 'react-router-dom';

import { NavbarBlock, NavbarLink, NavbarIcon } from './Navbar.elements';

import { useAccessToken } from '../../hooks';

import IconSprite from '../../assets/menu.svg';

type NavbarProps = {
  open: boolean;
  onClick: () => void;
};

export const Navbar: FC<NavbarProps> = ({ open, onClick }: NavbarProps) => {
  // const [login, setLogin] = useState(false);
  const { setToken, token } = useAccessToken();

  return (
    <NavbarBlock open={open}>
      {/* TODO: Сделать якоря */}
      <NavbarLink as={Link} to="/" onClick={onClick}>
        <NavbarIcon href={IconSprite + '#masters'} />
        Мастера
      </NavbarLink>
      <NavbarLink as={Link} to="/record" onClick={onClick}>
        <NavbarIcon href={IconSprite + '#recording'} />
        Записаться на массаж
      </NavbarLink>
      <NavbarLink as={Link} to="/" onClick={onClick}>
        <NavbarIcon href={IconSprite + '#phone'} />
        Контакты
      </NavbarLink>
      {!token && (
        <NavbarLink as={Link} to="/signin" onClick={onClick}>
          <NavbarIcon href={IconSprite + '#user'} />
          Войти
        </NavbarLink>
      )}
      {token && (
        <NavbarLink onClick={() => setToken('')}>
          <NavbarIcon href={IconSprite + '#sign-out'} />
          Выйти
        </NavbarLink>
      )}
      {/* {!token && (
        <>
          <NavbarButton as={Link} to="/signin" border onClick={onClick}>
            Войти
          </NavbarButton>
          <NavbarButton as={Link} to="/signup" border onClick={onClick}>
            Зарегистрироваться
          </NavbarButton>
        </>
      )}
      {token && (
        <NavbarButton border onClick={() => setToken('')}>
          Выйти
        </NavbarButton>
      )} */}
    </NavbarBlock>
  );
};
