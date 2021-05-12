import { FC, useEffect, useState } from 'react';

import { ScrollToTopWrapper, ScrollToTopIcon } from './ScrollToTop.elements';

import IconSprite from '../../assets/svg/slider-controller.svg';

export const ScrollToTop: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // const windowResize = () => {
    //   const element = document.querySelector('.wrapper');

    //   if (element !== null && element.clientHeight >= window.innerHeight) {
    //     console.log(element.scrollHeight, element.clientHeight);
    //     setVisible(false);
    //   }
    // };

    const windowScroll = () => {
      if (
        document.body.clientHeight > window.innerHeight * 1.2 &&
        window.pageYOffset > 0
      )
        setVisible(true);
      else setVisible(false);
    };

    // console.log(window.innerHeight, document.body.clientHeight);
    // windowResize();

    window.addEventListener('scroll', windowScroll);
    // window.addEventListener('resize', windowResize);

    return () => {
      // window.removeEventListener('resize', windowResize);
      window.removeEventListener('resize', windowScroll);
    };
  }, []);

  return (
    <ScrollToTopWrapper
      onClick={() => {
        window.scrollBy({
          top: document.body.getBoundingClientRect().top,
          behavior: 'smooth',
        });
      }}
      visible={visible}
    >
      <ScrollToTopIcon href={`${IconSprite}#arrow-left`} />
    </ScrollToTopWrapper>
  );
};
