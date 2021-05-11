import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MassageTypesWrapper,
  MassageTypesContainer,
  MassageTypesTitle,
  MassageTypesContent,
  MassageTypesPreviewImg,
  MassageTypesInfo,
  MassageTypesName,
  MassageTypesText,
  MassageTypesButton,
  MassageTypesGallery,
  MassageTypesDecorationText,
  MassageTypesImagesScroll,
  MassageTypesImage,
  MassageTypesBlockImage,
} from './MassageTypes.elements';

import { useCurrentMassageType, useServerQuery } from '../../hooks';
import { GetMassageTypes, GetMassageTypesResponse } from '../../server';

import Plug from '../../assets/images/plug.jpg';
import { breakpoints } from '../../styles/Variables';

export const MassageTypes: FC = () => {
  const infoRef = useRef<any>();
  const [height, setHeight] = useState(400);
  const [preview, setPreview] = useState<GetMassageTypesResponse>({
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
  });
  const [load, setLoad] = useState(false);

  const { data, isLoading } = useServerQuery(
    'massageTypes',
    GetMassageTypes,
    undefined
  );

  const imgAddress = process.env.REACT_APP_IMG_ADDRESS;

  useEffect(() => {
    if (!isLoading) {
      setPreview(data![0]);
    }
  }, [isLoading]);

  const { SetMassageType } = useCurrentMassageType();

  const handleClickMasseur = () => {
    if (preview.name !== '') {
      SetMassageType(preview);
    }
  };

  // useEffect(() => {
  //   const resize = () => {
  //     if (window.innerWidth >= breakpoints.sm) setHeight(infoRef.current.clientHeight);
  //   };

  //   if (null !== infoRef.current) {
  //     setHeight(infoRef.current.clientHeight);

  //     window.addEventListener('resize', resize);
  //   }

  //   return () => {
  //     window.removeEventListener('resize', resize);
  //   };
  // }, [preview, defaultPreview, infoRef]);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= breakpoints.ml)
        setHeight(infoRef.current.clientHeight);
    };

    setHeight(infoRef.current.clientHeight);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <MassageTypesWrapper>
      <MassageTypesContainer>
        <MassageTypesTitle>Виды массажа</MassageTypesTitle>
        <MassageTypesContent height={height}>
          <MassageTypesPreviewImg
            src={preview.image === '' ? Plug : imgAddress + preview?.image}
            alt={preview.name}
            onLoad={() => setHeight(infoRef.current.clientHeight)}
          />
          <MassageTypesInfo>
            <MassageTypesInfo ref={infoRef}>
              <MassageTypesName>{preview.name}</MassageTypesName>
              <MassageTypesText>{preview.description}</MassageTypesText>
              {/* <MassageTypesText>{`${preview?.description.substring(0, 420)}...`}</MassageTypesText> */}
              <MassageTypesButton
                as={Link}
                to="/record"
                onClick={() => handleClickMasseur()}
              >
                Записаться
              </MassageTypesButton>
            </MassageTypesInfo>
          </MassageTypesInfo>
        </MassageTypesContent>
        <MassageTypesGallery>
          <MassageTypesImagesScroll load={load}>
            {data === undefined && (
              <MassageTypesBlockImage data-massage-name="Загрузка...">
                <MassageTypesImage src={Plug} alt="Загрузка..." />
              </MassageTypesBlockImage>
            )}
            {data?.map((massage) => (
              <MassageTypesBlockImage
                data-massage-name={load ? massage.name : 'Загрузка...'}
                onClick={() => {
                  setPreview(massage);
                  setHeight(infoRef.current.clientHeight);
                  // infoRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }}
                key={massage.id}
              >
                <MassageTypesImage
                  src={load ? imgAddress + massage?.image : Plug}
                  // src={massage?.image ? imgAddress + massage?.image : Plug}
                  alt={massage.name}
                  onLoad={() => setLoad(true)}
                />
              </MassageTypesBlockImage>
            ))}
          </MassageTypesImagesScroll>
          <MassageTypesDecorationText vertical length="116px">
            Все виды
          </MassageTypesDecorationText>
        </MassageTypesGallery>
      </MassageTypesContainer>
    </MassageTypesWrapper>
  );
};
