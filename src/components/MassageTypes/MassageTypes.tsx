import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MassageTypesWrapper,
  MassageTypesContainer,
  MassageTypesTitle,
  MassageTypesContent,
  MassageTypesPreviewBlock,
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

export const MassageTypes: FC = () => {
  const [preview, setPreview] = useState<GetMassageTypesResponse>();

  const { data, isLoading } = useServerQuery(
    'massageTypes',
    GetMassageTypes,
    undefined
  );

  const imgAddress = process.env.REACT_APP_IMG_ADDRESS;

  useEffect(() => {
    if (data !== undefined) {
      setPreview(data![0]);
    }
  }, [isLoading]);

  const { SetMassageType } = useCurrentMassageType();

  const handleClickMasseur = () => {
    if (preview) SetMassageType(preview);
  };

  if (!data || (data && data.length === 0)) return <></>;

  return (
    <MassageTypesWrapper>
      <MassageTypesContainer>
        <MassageTypesTitle>Виды массажа</MassageTypesTitle>
        <MassageTypesContent>
          <MassageTypesPreviewBlock>
            <MassageTypesPreviewImg
              src={preview && imgAddress + preview.image}
              alt={preview && preview.name}
              onLoad={(event) => {
                const target = event.target as HTMLTextAreaElement;
                target.style.display = 'block';
              }}
            />
          </MassageTypesPreviewBlock>
          <MassageTypesInfo>
            <MassageTypesName>{preview && preview.name}</MassageTypesName>
            <MassageTypesText>
              {preview && preview.description}
            </MassageTypesText>
            <MassageTypesButton
              as={Link}
              to="/record"
              onClick={() => handleClickMasseur()}
            >
              Записаться
            </MassageTypesButton>
          </MassageTypesInfo>
        </MassageTypesContent>
        <MassageTypesGallery>
          <MassageTypesImagesScroll>
            {data &&
              data?.map((massage) => (
                <MassageTypesBlockImage
                  data-massage-name={massage.name}
                  onClick={() => {
                    setPreview(massage);
                  }}
                  key={massage.id}
                >
                  <MassageTypesImage
                    src={imgAddress + massage.image}
                    alt={massage.name}
                    onLoad={(event) => {
                      const target = event.target as HTMLTextAreaElement;
                      target.style.display = 'block';
                    }}
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
