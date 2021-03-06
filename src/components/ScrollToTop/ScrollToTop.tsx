import { FC, useEffect, useState } from 'react';

import { ScrollToTopWrapper, ScrollToTopIcon } from './ScrollToTop.elements';

import IconSprite from '../../assets/svg/slider-controller.svg';

export const ScrollToTop: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const windowScroll = () => {
      if (
        document.body.clientHeight > window.innerHeight * 1.2 &&
        window.pageYOffset > 0
      )
        setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', windowScroll);

    return () => {
      window.removeEventListener('scroll', windowScroll);
    };
  }, []);

  return (
    <ScrollToTopWrapper
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      visible={visible}
    >
      <ScrollToTopIcon href={`${IconSprite}#arrow-left`} />
    </ScrollToTopWrapper>
  );
};
