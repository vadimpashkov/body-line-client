import { FC, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { Burger } from '../Burger';

import { HeaderBlock, HeaderContainer, Backdrop, LogotypeLink, HeaderLogotype } from './Header.elements';

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  // const [height, setHeight] = useState(0);
  // const refHeight = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (refHeight?.current?.clientHeight) {
  //     setHeight(refHeight.current.clientHeight);
  //   }
  // }, [height]);

  // if (open) {
  //   document.body.style.overflowY = 'hidden';
  // } else {
  //   document.body.removeAttribute('style');
  // }

  return (
    <>
      {open && <Backdrop open={open} onClick={() => setOpen(false)} />}
      <HeaderBlock>
        <HeaderContainer ref={node as any}>
          <LogotypeLink as={Link} to="/">
            <HeaderLogotype />
          </LogotypeLink>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} onClick={() => setOpen(false)} />
        </HeaderContainer>
      </HeaderBlock>
    </>
  );
};
