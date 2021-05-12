import { FC } from 'react';
import { Link } from 'react-router-dom';
import { scroller, animateScroll } from 'react-scroll';

import { NavbarBlock, NavbarLink, NavbarIcon } from './Navbar.elements';

import { useAccessToken } from '../../hooks';

import IconSprite from '../../assets/svg/menu.svg';

type NavbarProps = {
  open: boolean;
  onClick: () => void;
};

export const Navbar: FC<NavbarProps> = ({ open, onClick }: NavbarProps) => {
  // const [login, setLogin] = useState(false);
  const { setToken, token } = useAccessToken();

  const getItem = (id: string, offset: number = 140) => {
    const item = scroller.get(id);
    !item
      ? setTimeout(getItem, 100, id)
      : scroller.scrollTo(id, {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -offset,
        });
  };

  return (
    <NavbarBlock open={open}>
      {/* TODO: Удаление записи в течении 24 часов */}
      {/* TODO: Если человек залогинен - сделать запись на консультацию просто по нажатию на кнопку */}
      {/* TODO: Разделить record запись и вывод записи на разные страницы */}
      {/* TODO: Переделать favicon (на досуге) */}
      <NavbarLink as={Link} to="/record" onClick={onClick}>
        <NavbarIcon href={IconSprite + '#recording'} />
        Записаться на массаж
      </NavbarLink>
      <NavbarLink
        as={Link}
        to="/"
        onClick={() => {
          onClick();
          getItem('team');
        }}
      >
        <NavbarIcon href={IconSprite + '#masters'} />
        Мастера
      </NavbarLink>
      <NavbarLink
        as={Link}
        to="/"
        onClick={() => {
          onClick();
          getItem('contacts', 70);
        }}
      >
        <NavbarIcon href={IconSprite + '#phone'} />
        Контакты
      </NavbarLink>
      {!token ? (
        <NavbarLink as={Link} to="/signin" onClick={onClick}>
          <NavbarIcon href={IconSprite + '#user'} />
          Войти
        </NavbarLink>
      ) : (
        <NavbarLink onClick={() => setToken('')}>
          <NavbarIcon href={IconSprite + '#sign-out'} />
          Выйти
        </NavbarLink>
      )}
    </NavbarBlock>
  );
};
