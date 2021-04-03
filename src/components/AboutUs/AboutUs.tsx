import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useServer } from '../../hooks';
import { GetPhotosSalon, GetPhotosSalonResponse } from '../../server';

import { Wrapper } from '../Wrapper';
import { TitleH2 } from '../Titles';
import { Text } from '../Text';
import DecorationText from '../DecorationText';

import { pxToRem, responsive } from '../../styles/mixins';
import { device } from '../../styles/Variables';

import Plug from '../../assets/images/plug.jpg';

const AboutUsStyles = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${responsive(36, 54)};

    @media ${device.ml} {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }

  .title {
    margin-bottom: ${responsive(24, 36)};
  }

  .text {
    margin-bottom: ${pxToRem(16)};

    :last-child {
      margin-bottom: 0;
    }
  }

  .content {
    min-width: 0;
  }

  .decoration-text {
    justify-content: flex-start;
    margin-bottom: ${pxToRem(16)};
  }
`;

const PreviewImg = styled.img`
  max-height: 745px;

  @media ${device.ml} {
    max-width: initial;
    width: 100%;
    max-height: ${responsive(260, 500)};
  }
`;

const TextContainer = styled.div`
  margin-bottom: ${responsive(42, 72)};
`;

const ImagesScroll = styled.div`
  display: flex;
  column-gap: ${pxToRem(16)};
  height: 200px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  /* @media (pointer: coarse) {
    overflow-x: auto;
  }

  @media (hover: hover) {
    :hover {
      overflow-x: auto;
    }
  } */

  .image {
    scroll-snap-align: start;
    min-width: 320px;

    @media ${device.xxs} {
      min-width: 260px;
    }
  }
`;

const Gallery = styled.div``;

const AboutUs: FC = () => {
  const [photos, setPhotos] = useState<GetPhotosSalonResponse[]>([]);
  const [preview, setPreview] = useState<GetPhotosSalonResponse>();

  const getPhotosSalon = useServer(GetPhotosSalon);

  const loading = getPhotosSalon.state.fetching;
  const fetched = getPhotosSalon.isFetched;
  const success = !loading && getPhotosSalon.state.answer.success;

  useEffect(() => {
    if (success) {
      setPhotos(getPhotosSalon.state.answer.data!);
      setPreview(getPhotosSalon.state.answer.data![0]);
    }

    getPhotosSalon.reload();
  }, [success, fetched]);

  useEffect(() => {
    getPhotosSalon.fetch(undefined);
  }, []);

  return (
    <AboutUsStyles>
      <Wrapper className="wrapper">
        <PreviewImg
          className="img"
          src={preview?.src ? process.env.REACT_APP_PROXY_ADDRESS + '/img/salon/' + preview?.src : Plug}
          alt={preview?.alt}
        />
        <div className="content">
          <TitleH2 className="title">О нас</TitleH2>
          <TextContainer>
            <Text className="text">
              Насладитесь полноценным отдыхом, обретите духовную и телесную гармонию в сети массажном салоне Body-Line.
              Дипломированные мастера из Таиланда и с Бали выполняют оздоровительные, расслабляющие, омолаживающие
              процедуры, точно следуя вековым традициям. Стильный интерьер, мягкий свет, приглушенная музыка,
              ароматерапия делают пребывание в спа-салоне особенно приятным. Для процедур мы используем натуральные
              косметические средства и высококачественные расходные материалы.
            </Text>
            <Text>
              Мы предлагаем приятные и эффективные ритуалы для красоты, здоровья и молодости — от традиционного тайского
              массажа до уникальных slim-процедур. Выберите комфортный режим ухода за собой, отвечающий вашему ритму
              жизни. Разовые посещения подходят для занятых людей, интенсивные мини-курсы помогают быстро избавиться от
              стресса, болей, лишнего веса, продолжительные программы оказывают мощный терапевтический эффект и дают
              устойчивый результат.
            </Text>
          </TextContainer>
          <Gallery>
            <DecorationText className="decoration-text" length={pxToRem(45)}>
              Наш салон
            </DecorationText>
            <ImagesScroll>
              {photos.map((photo) => (
                <img
                  className="image img"
                  src={photo?.src ? process.env.REACT_APP_PROXY_ADDRESS + '/img/salon/' + photo?.src : Plug}
                  alt={photo.alt}
                  onClick={() => setPreview(photo)}
                  key={photo.id}
                />
              ))}
            </ImagesScroll>
          </Gallery>
        </div>
      </Wrapper>
    </AboutUsStyles>
  );
};

export default AboutUs;
