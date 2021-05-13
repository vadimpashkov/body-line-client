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
              Бытовая суета, работа, постоянное напряжение изо дня в день - и в
              каждом из нас копится усталость. Это отрицательно сказывается на
              общем состоянии здоровья и возникает желание отдохнуть.
            </AboutUsText>
            <AboutUsText>
              Приглашаем Вас насладиться полноценным отдыхом, обрести духовную и
              телесную гармонию в сети массажного салона Body-Line.
              Дипломированные мастера выполнят оздоровительные, расслабляющие,
              омолаживающие процедуры, точно следуя вековым традициям массажа.
            </AboutUsText>
            <AboutUsText>
              Стильный интерьер, мягкий свет, приглушенная музыка, ароматерапия
              сделают пребывание в салоне особенно приятным.
            </AboutUsText>
            <AboutUsText>
              Для процедур используются натуральные косметические средства и
              высококачественные расходные материалы. Вам предлагается
              возможность выбрать комфортный режим ухода за собой, который
              соответствует вашему ритму жизни.
            </AboutUsText>
            <AboutUsText>
              Разовые посещения салона-для занятых людей. Интенсивные мини-курсы
              помогут быстро избавиться от стресса, болей и лишнего веса.
              Продолжительные программы окажут мощный терапевтический эффект и
              дадут устойчивый результат. Приятным бонусом для вас станут
              тонизирующие напитки и различные угощения. Мы понимаем, чего
              хотите Вы и готовы Вам это предложить!
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
