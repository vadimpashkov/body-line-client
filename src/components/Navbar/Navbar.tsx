import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { NavbarBlock, NavbarLink, NavbarIcon } from './Navbar.elements';

import { useAccessToken } from '../../hooks';

import IconSprite from '../../assets/svg/menu.svg';

type NavbarProps = {
  open: boolean;
  onClick: () => void;
};

export const Navbar: FC<NavbarProps> = ({ open, onClick }: NavbarProps) => {
  const { setToken, token } = useAccessToken();

  const scrollWithOffset = (element: HTMLElement, offset: number = 70) => {
    const yCoord = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -offset;

    console.log(element, element.getBoundingClientRect().top);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: yCoord + yOffset, behavior: 'smooth' });
  };

  return (
    <NavbarBlock open={open}>
      {/* TODO: Если человек залогинен - сделать запись на консультацию просто по
      нажатию на кнопку
      TODO: Переделать favicon */}
      <NavbarLink as={Link} to="/record" onClick={onClick}>
        <NavbarIcon href={IconSprite + '#recording'} />
        Записаться на массаж
      </NavbarLink>
      <NavbarLink
        as={HashLink}
        to="/#team"
        scroll={(element: HTMLElement) => scrollWithOffset(element)}
        onClick={onClick}
      >
        <NavbarIcon href={IconSprite + '#masters'} />
        Мастера
      </NavbarLink>
      <NavbarLink
        as={HashLink}
        to="/#contacts"
        scroll={(element: HTMLElement) => scrollWithOffset(element, 70)}
        onClick={onClick}
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
