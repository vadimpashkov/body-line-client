import { FC } from 'react';
import styled from 'styled-components';

import { pxToRem } from '../../styles/mixins';

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';
import { anim } from '../../styles/Variables';

const SliderControllerStyles = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${pxToRem(27)};
  cursor: default;

  .icon {
    width: ${pxToRem(34)} !important;
    fill: ${({ theme }) => theme.palette.font};
    transition: fill ${anim.duration} linear;
    cursor: pointer;

    :hover {
      fill: ${({ theme }) => theme.palette.primary};
    }
  }
`;

const Count = styled.p`
  font-size: ${pxToRem(34)};
  font-weight: 500;

  .small {
    font-size: ${pxToRem(16)};
    color: ${({ theme }) => theme.palette.primary};
  }
`;

type ArrowProps = {
  className?: string;
  total: number | string;
  quantityNow: number | string;
  onClickLeftArrow: () => void;
  onClickRightArrow: () => void;
};

export const SliderController: FC<ArrowProps> = ({
  className,
  total,
  quantityNow,
  onClickLeftArrow,
  onClickRightArrow,
}: ArrowProps) => {
  if (total < 10) {
    total = '0' + total;
  }

  if (quantityNow < 10) {
    quantityNow = '0' + quantityNow;
  }

  return (
    <SliderControllerStyles className={className}>
      <ArrowLeftIcon className="icon" onClick={onClickLeftArrow} />
      <Count>
        {quantityNow} / <span className="small">{total}</span>
      </Count>
      <ArrowRightIcon className="icon" onClick={onClickRightArrow} />
    </SliderControllerStyles>
  );
};
