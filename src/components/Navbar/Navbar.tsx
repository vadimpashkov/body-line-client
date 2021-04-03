import { FC, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../styles/Variables';
import { responsive, addAlpha } from '../../styles/mixins';

import { Wrapper } from '../Wrapper';
import Menu from '../Menu';
import Burger from '../Burger';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

const Blur = styled.div<HeaderProps>`
  @media (hover: hover) {
    position: absolute;
    display: ${({ open }) => (open ? 'block' : 'none')};
    width: 100%;
    height: 100000px;
    backdrop-filter: blur(8px);
    background-color: ${({ theme }) => addAlpha(theme.palette.background, 0.08)};
    z-index: 100;
  }
`;

const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.font};
  z-index: 200;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    color: ${({ theme }) => theme.palette.background};

    @media ${device.sm} {
      justify-content: space-between;
    }
  }

  .logo {
    width: ${responsive(90, 100)};
    fill: ${({ theme }) => theme.palette.background};
  }
`;

type HeaderProps = {
  open: boolean;
};

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  // const [height, setHeight] = useState(0);
  // const refHeight = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (refHeight?.current?.clientHeight) {
  //     setHeight(refHeight.current.clientHeight);
  //   }
  // }, [height]);

  if (open) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.removeAttribute('style');
  }

  return (
    <>
      <Blur open={open} onClick={() => setOpen(false)}></Blur>
      <Header open={open}>
        <Wrapper className="wrapper" ref={node as any}>
          <Link to="/">
            <LogoIcon className="logo" />
          </Link>
          <Burger open={open} setOpen={setOpen} />
        </Wrapper>
        <Menu open={open} onClick={() => setOpen(false)} />
      </Header>
    </>
  );
};

export default Navbar;
