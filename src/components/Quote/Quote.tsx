import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Text } from '../Text';

import { addAlpha, pxToRem } from '../../styles/mixins';

import { ReactComponent as QuoteLeftIcon } from '../../assets/icons/quote-left.svg';
import { ReactComponent as QuoteRightIcon } from '../../assets/icons/quote-right.svg';
import { anim, device, font } from '../../styles/Variables';

const QuoteStyles = styled.div<QuoteStylesProps>`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: ${pxToRem(16)};
  row-gap: ${pxToRem(32)};

  @media ${device.xs} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto auto;
    row-gap: ${pxToRem(16)};
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => addAlpha(theme.palette.background, 0.1)} 0,
      ${({ theme }) => addAlpha(theme.palette.background, 0.6)} 60%
    );

    ${({ open }) => open && 'background: none;'}
  }

  .text {
    font-style: italic;
    white-space: pre-wrap;
  }

  .icon {
    fill: ${({ theme }) => theme.palette.font};
    width: ${pxToRem(24)} !important;
    height: ${pxToRem(24)} !important;
  }

  .right {
    align-self: end;

    @media ${device.md} {
      justify-self: end;
    }
  }

  .btn {
    ${({ open }) => open && 'display: none;'}
    justify-self: start !important;
    font-family: ${font.family.title.name};
    text-transform: uppercase;
    transition: color ${anim.duration} linear;
    text-align: left;
    z-index: 10;

    @media ${device.md} {
      grid-column: 1 / -1;
    }

    @media ${device.xs} {
      grid-row-start: 4 !important;
    }

    :hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

type QuoteProps = {
  children: string;
  className?: string;
  onLoad?: () => void;
};

type QuoteStylesProps = {
  open: boolean;
};

export const Quote: FC<QuoteProps> = ({ children, className, onLoad }: QuoteProps) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const clickHandler = () => {
    setOpen(true);
    setText(children);
  };

  useEffect(() => {
    setText(`${children.substring(0, 630)}...`);
  }, [children]);

  // useEffect(() => {
  //   setText(children);
  // }, [open, text]);

  // const text = `${children.substring(0, 630)}...`;

  return (
    <QuoteStyles className={className} open={open} onLoad={onLoad}>
      <QuoteLeftIcon className="icon" />
      <Text className="text">{text}</Text>
      <QuoteRightIcon className="icon right" />
      <button className="btn" onClick={() => clickHandler()}>
        Развернуть
      </button>
    </QuoteStyles>
  );
};
