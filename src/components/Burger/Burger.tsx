import { FC } from 'react';
import styled from 'styled-components';

import { anim, device } from '../../styles/Variables';
import { pxToRem } from '../../styles/mixins';

const Wrapper = styled.div<StyledBurgerProps>`
  position: fixed;
  display: grid;
  place-items: center;
  top: 100px;
  right: 40px;
  width: ${pxToRem(74)};
  height: ${pxToRem(74)};
  background-color: ${({ theme }) => theme.palette.font};
  border-radius: 50%;
  border: 1px solid ${({ open }) => (open ? 'none' : ({ theme }) => theme.palette.background)};
  cursor: pointer;
  z-index: 200;
  transform: ${({ open }) => (open ? 'translateX(-360px)' : 'translateX(0)')};
  transition: transform ${anim.duration} linear, opacity ${anim.duration} linear, width ${anim.duration} linear,
    background-color ${anim.duration} linear, border ${anim.duration} linear;

  @media ${device.sm} {
    border: none;
  }

  @media (hover: hover) {
    :hover {
      background-color: ${({ theme }) => theme.palette.background};
      border-color: ${({ theme }) => theme.palette.font};

      div {
        background-color: ${({ theme }) => theme.palette.font};
      }
    }
  }

  @media ${device.sm} {
    position: initial;
    width: initial;
    height: initial;
    transform: none;
  }
`;

const StyledBurger = styled.button<StyledBurgerProps>`
  width: 26px;
  padding: 0;

  div {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.palette.background};
    margin-bottom: 4px;
    transform-origin: 4.5px 4px;
    transition: transform ${anim.duration} linear, opacity ${anim.duration} linear,
      background-color ${anim.duration} linear;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(-26px)' : 'translateX(0)')};
    }

    :last-child {
      margin-left: 20%;
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      margin-bottom: 0;
      width: ${({ open }) => (open ? '100%' : '80%')};
    }
  }
`;

type BurgerProps = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

type StyledBurgerProps = {
  open: boolean;
};

const Burger: FC<BurgerProps> = ({ open, setOpen }: BurgerProps) => {
  return (
    <Wrapper open={open} onClick={() => setOpen(!open)}>
      <StyledBurger open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </Wrapper>
  );
};

export default Burger;
