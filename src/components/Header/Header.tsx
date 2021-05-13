import { FC, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Navbar } from '../Navbar';
import { Burger } from '../Burger';

import {
  HeaderBlock,
  HeaderContainer,
  Backdrop,
  LogotypeLink,
  HeaderLogotype,
} from './Header.elements';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <>
      {open && <Backdrop open={open} onClick={() => setOpen(false)} />}
      <HeaderBlock>
        <HeaderContainer ref={node as any}>
          <LogotypeLink as={HashLink} to="/#top">
            <HeaderLogotype />
          </LogotypeLink>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} onClick={() => setOpen(false)} />
        </HeaderContainer>
      </HeaderBlock>
    </>
  );
};
