import React, { FC, useEffect, useRef } from 'react';

import {
  HorizontalScrollingBlock,
  HorizontalScrollingList,
} from './HorizontalScrolling.elements';

export type HorizontalScrollingProps = {
  children: React.ReactNode;
  className?: string;
  load?: boolean;
};

export const HorizontalScrolling: FC<HorizontalScrollingProps> = ({
  children,
  className,
  load,
}: HorizontalScrollingProps) => {
  const scrollRef = useRef<HTMLHeadingElement>(null);
  const scrollListRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (null !== scrollRef.current && null !== scrollListRef.current) {
      let scroll = scrollRef.current;
      let scrollList = scrollListRef.current;

      let scrollListEnd = scrollList.offsetWidth - scrollList.scrollWidth;
      let isDragging = false;
      let animationID = 0;
      let startPos = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;

      const setSliderPosition = () => {
        if (currentTranslate > 0) {
          currentTranslate = 0;
        } else if (currentTranslate < scrollListEnd) {
          currentTranslate = scrollListEnd;
        }

        scrollList.style.transform = `translateX(${currentTranslate}px)`;
      };

      const scrollResize = () => {
        scrollListEnd = scrollList.offsetWidth - scrollList.scrollWidth;
        setSliderPosition();
        return;
      };

      const animation = () => {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
      };

      const getPositionX = (event: any) => {
        return event.type.includes('mouse')
          ? event?.pageX
          : event?.touches[0].clientX;
      };

      const touchStart = (event: TouchEvent | MouseEvent) => {
        if (matchMedia('(pointer: coarse)').matches) scrollResize();
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        isDragging = true;
        return;
      };

      const touchMove = (event: TouchEvent | MouseEvent) => {
        if (isDragging) {
          const currentPosition = getPositionX(event);
          currentTranslate = currentPosition + prevTranslate - startPos;
          return;
        }
      };

      const touchEnd = () => {
        prevTranslate = currentTranslate;
        cancelAnimationFrame(animationID);
        isDragging = false;

        return;
      };

      const wheeling = (event: WheelEvent) => {
        currentTranslate -= event.deltaY / 2;
        prevTranslate = currentTranslate;

        setSliderPosition();
      };

      const mouseEnter = () => {
        if (matchMedia('(pointer: fine)').matches && scrollListEnd !== 0)
          document.body.classList.add('no-scroll');
        scrollResize();
        scroll.addEventListener('wheel', wheeling);
        return;
      };

      const mouseLeave = () => {
        document.body.classList.remove('no-scroll');
        touchEnd();
        return;
      };

      window.addEventListener('resize', scrollResize);
      scroll.addEventListener('touchstart', touchStart);
      scroll.addEventListener('touchend', touchEnd);
      scroll.addEventListener('touchmove', touchMove);
      scroll.addEventListener('mousedown', touchStart);
      scroll.addEventListener('mouseup', touchEnd);
      scroll.addEventListener('mousemove', touchMove);
      scroll.addEventListener('mouseenter', mouseEnter);
      scroll.addEventListener('mouseleave', mouseLeave);

      return () => {
        window.removeEventListener('resize', scrollResize);
        scroll.removeEventListener('touchstart', touchStart);
        scroll.removeEventListener('touchend', touchEnd);
        scroll.removeEventListener('touchmove', touchMove);
        scroll.removeEventListener('mousedown', touchStart);
        scroll.removeEventListener('mouseup', touchEnd);
        scroll.removeEventListener('mousemove', touchMove);
        scroll.removeEventListener('mouseenter', mouseEnter);
        scroll.removeEventListener('mouseleave', mouseLeave);
      };
    }
  }, [load]);

  return (
    <HorizontalScrollingBlock ref={scrollRef} className={className}>
      <HorizontalScrollingList ref={scrollListRef}>
        {children}
      </HorizontalScrollingList>
    </HorizontalScrollingBlock>
  );
};
