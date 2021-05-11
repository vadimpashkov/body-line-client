import { FC, useEffect, useRef, useState } from 'react';

import {
  AboutUsStyles,
  AboutUsContainer,
  AboutUsPreviewImg,
  AboutUsContent,
  AboutUsTitle,
  TextContainer,
  AboutUsText,
  Gallery,
  AboutUsDecorationText,
  ImagesScroll,
  AboutUsImage,
} from './AboutUs.elements';

import { useServerQuery } from '../../hooks';
import { GetPhotosSalon, GetPhotosSalonResponse } from '../../server';

import { breakpoints } from '../../styles/Variables';

import Plug from '../../assets/images/plug.jpg';

export const AboutUs: FC = () => {
  const contentRef = useRef<any>();
  const [height, setHeight] = useState(100);
  const [preview, setPreview] = useState<GetPhotosSalonResponse>();
  const [load, setLoad] = useState(false);

  const { data } = useServerQuery('salonPhotos', GetPhotosSalon, undefined);

  const imgAddress = process.env.REACT_APP_IMG_ADDRESS;
  const defaultPreview =
    data !== undefined && data?.length > 0 ? data[0] : undefined;

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= breakpoints.ml)
        setHeight(contentRef.current.clientHeight);
    };

    setHeight(contentRef.current.clientHeight);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <AboutUsStyles>
      <AboutUsContainer height={height}>
        <AboutUsPreviewImg
          src={
            defaultPreview === undefined
              ? Plug
              : imgAddress + (preview?.src || defaultPreview?.src)
          }
          alt={preview?.alt || defaultPreview?.alt}
        />
        <AboutUsContent>
          <AboutUsContent ref={contentRef}>
            <AboutUsTitle>О нас</AboutUsTitle>
            <TextContainer>
              <AboutUsText>
                Насладитесь полноценным отдыхом, обретите духовную и телесную
                гармонию в сети массажном салоне Body-Line. Дипломированные
                мастера из Таиланда и с Бали выполняют оздоровительные,
                расслабляющие, омолаживающие процедуры, точно следуя вековым
                традициям. Стильный интерьер, мягкий свет, приглушенная музыка,
                ароматерапия делают пребывание в спа-салоне особенно приятным.
                Для процедур мы используем натуральные косметические средства и
                высококачественные расходные материалы.
              </AboutUsText>
              <AboutUsText>
                Мы предлагаем приятные и эффективные ритуалы для красоты,
                здоровья и молодости — от традиционного тайского массажа до
                уникальных slim-процедур. Выберите комфортный режим ухода за
                собой, отвечающий вашему ритму жизни. Разовые посещения подходят
                для занятых людей, интенсивные мини-курсы помогают быстро
                избавиться от стресса, болей, лишнего веса, продолжительные
                программы оказывают мощный терапевтический эффект и дают
                устойчивый результат.
              </AboutUsText>
            </TextContainer>
            <Gallery>
              <AboutUsDecorationText length="45px">
                Наш салон
              </AboutUsDecorationText>
              <ImagesScroll load={load}>
                {data?.map((photo) => (
                  <AboutUsImage
                    src={load ? imgAddress + photo?.src : Plug}
                    alt={load ? photo.alt : 'Загрузка...'}
                    onClick={() => setPreview(photo)}
                    key={photo.id}
                    onLoad={() => setLoad(true)}
                  />
                ))}
              </ImagesScroll>
            </Gallery>
          </AboutUsContent>
        </AboutUsContent>
      </AboutUsContainer>
    </AboutUsStyles>
  );
};
