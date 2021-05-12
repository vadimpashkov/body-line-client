import { FC, useEffect, useState } from 'react';

import {
  AboutUsStyles,
  AboutUsContainer,
  AboutUsPreviewBlock,
  AboutUsPreviewImg,
  AboutUsContent,
  AboutUsTitle,
  TextContainer,
  AboutUsText,
  Gallery,
  AboutUsDecorationText,
  ImagesScroll,
  AboutUsImageBlock,
  AboutUsImage,
} from './AboutUs.elements';

import { useServerQuery } from '../../hooks';
import { GetPhotosSalon, GetPhotosSalonResponse } from '../../server';

export const AboutUs: FC = () => {
  const [preview, setPreview] = useState<GetPhotosSalonResponse>();

  const { data, isLoading } = useServerQuery(
    'salonPhotos',
    GetPhotosSalon,
    undefined
  );

  useEffect(() => {
    if (data !== undefined) {
      setPreview(data![0]);
    }
  }, [isLoading]);

  const imgAddress = process.env.REACT_APP_IMG_ADDRESS;

  return (
    <AboutUsStyles>
      <AboutUsContainer>
        {data && data?.length > 0 && (
          <AboutUsPreviewBlock>
            {preview !== undefined && (
              <AboutUsPreviewImg
                src={imgAddress + preview?.src}
                alt={preview?.alt}
                onLoad={(event) => {
                  const target = event.target as HTMLTextAreaElement;
                  target.style.display = 'block';
                }}
              />
            )}
          </AboutUsPreviewBlock>
        )}
        <AboutUsContent>
          <AboutUsTitle>О нас</AboutUsTitle>
          <TextContainer>
            <AboutUsText>
              Насладитесь полноценным отдыхом, обретите духовную и телесную
              гармонию в сети массажном салоне Body-Line. Дипломированные
              мастера из Таиланда и с Бали выполняют оздоровительные,
              расслабляющие, омолаживающие процедуры, точно следуя вековым
              традициям. Стильный интерьер, мягкий свет, приглушенная музыка,
              ароматерапия делают пребывание в спа-салоне особенно приятным. Для
              процедур мы используем натуральные косметические средства и
              высококачественные расходные материалы.
            </AboutUsText>
            <AboutUsText>
              Мы предлагаем приятные и эффективные ритуалы для красоты, здоровья
              и молодости — от традиционного тайского массажа до уникальных
              slim-процедур. Выберите комфортный режим ухода за собой,
              отвечающий вашему ритму жизни. Разовые посещения подходят для
              занятых людей, интенсивные мини-курсы помогают быстро избавиться
              от стресса, болей, лишнего веса, продолжительные программы
              оказывают мощный терапевтический эффект и дают устойчивый
              результат.
            </AboutUsText>
          </TextContainer>
          {data && data?.length > 0 && (
            <Gallery>
              <AboutUsDecorationText length="45px">
                Наш салон
              </AboutUsDecorationText>
              <ImagesScroll>
                {data?.map((photo) => {
                  return (
                    <AboutUsImageBlock key={photo.id}>
                      <AboutUsImage
                        src={imgAddress + photo.src}
                        alt={photo.alt}
                        onClick={() => setPreview(photo)}
                        onLoad={(event) => {
                          const target = event.target as HTMLTextAreaElement;
                          target.style.display = 'block';
                        }}
                      />
                    </AboutUsImageBlock>
                  );
                })}
              </ImagesScroll>
            </Gallery>
          )}
        </AboutUsContent>
      </AboutUsContainer>
    </AboutUsStyles>
  );
};
