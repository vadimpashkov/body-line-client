import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../Buttons';

import { font, anim, device } from '../../styles/Variables';
import { pxToRem } from '../../styles/mixins';
import { useAccessToken } from '../../hooks';

import { ReactComponent as MasseurIcon } from '../../assets/icons/user.svg';
import { ReactComponent as RecordingIcon } from '../../assets/icons/recording.svg';
import { ReactComponent as ContactsIcon } from '../../assets/icons/phone.svg';

type NavType = {
  open: boolean;
};

const Nav = styled.nav<NavType>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: ${pxToRem(24)};
  margin-top: 60px;
  width: 360px;
  height: calc(100% - 60px);
  padding: ${pxToRem(35)};
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.font};
  z-index: 200;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform ${anim.duration} linear;

  @media ${device.sm} {
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .link {
    width: 100%;
  }

  .line {
    width: 100%;
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme.palette.background};
  }
`;

const NavLink = styled.p`
  color: ${({ theme }) => theme.palette.background};
  text-decoration: none;
  text-transform: none !important;
  font-family: ${font.family.title.name}, sans-serif;
  font-size: ${pxToRem(24)};
  font-weight: 400 !important;
  /* font-weight: ${font.family.title.weight}; */
  transition: color ${anim.duration} linear;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    display: inline-block;
    margin-right: ${pxToRem(22)};
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    fill: ${({ theme }) => theme.palette.background};
    transition: fill ${anim.duration} linear;
  }

  :hover {
    .icon {
      fill: ${({ theme }) => theme.palette.primary};
    }
    .link {
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  :hover .link {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

type MenuProps = {
  open: boolean;
  onClick: () => void;
};

const Menu: FC<MenuProps> = ({ open, onClick }: MenuProps) => {
  // const [login, setLogin] = useState(false);
  const { setToken, token } = useAccessToken();

  return (
    <Nav open={open}>
      <NavItem>
        <MasseurIcon className="icon" />
        <Link to="/">
          <NavLink className="link">Мастера</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <RecordingIcon className="icon" />
        <Link to="/">
          <NavLink className="link">Записаться на массаж</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <ContactsIcon className="icon" />
        <Link to="/login">
          <NavLink className="link">Контакты</NavLink>
        </Link>
      </NavItem>
      <hr className="line" />
      {!token && (
        <>
          <Link to="/login" className="link">
            <Button className="btn" border onClick={onClick}>
              Войти
            </Button>
          </Link>
          <Link to="/registration" className="link">
            <Button className="btn" border onClick={onClick}>
              Зарегистрироваться
            </Button>
          </Link>
        </>
      )}
      {token && (
        <Button className="btn" border onClick={() => setToken('')}>
          Выйти
        </Button>
      )}
    </Nav>
  );
};

export default Menu;
