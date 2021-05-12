import { FC } from 'react';

import {
  SliderControllerWrapper,
  ArrowLeft,
  ArrowRight,
  Count,
  CountSmallText,
} from './SliderController.elements';

import IconSprite from '../../assets/svg/slider-controller.svg';

type SliderControllerProps = {
  className?: string;
  onClickLeftArrow: () => void;
  onClickRightArrow: () => void;
  quantityNow: number | string;
  quantityTotal: number | string;
};

export const SliderController: FC<SliderControllerProps> = ({
  className,
  onClickLeftArrow,
  onClickRightArrow,
  quantityNow,
  quantityTotal,
}: SliderControllerProps) => {
  if (quantityTotal < 10) quantityTotal = '0' + quantityTotal;
  if (quantityNow < 10) quantityNow = '0' + quantityNow;

  return (
    <SliderControllerWrapper className={className}>
      <ArrowLeft href={IconSprite + '#arrow-left'} onClick={onClickLeftArrow} />
      <Count>
        {quantityNow} / <CountSmallText>{quantityTotal}</CountSmallText>
      </Count>
      <ArrowRight
        href={IconSprite + '#arrow-right'}
        onClick={onClickRightArrow}
      />
    </SliderControllerWrapper>
  );
};
