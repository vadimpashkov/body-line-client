import { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  TeamWrapper,
  TeamContainer,
  TeamContent,
  TeamInfo,
  TeamTitle,
  TeamName,
  TeamInfoPanel,
  TeamSubtitle,
  TeamText,
  TeamButton,
  TeamImage,
  TeamSliderController,
} from './Team.elements';

import { useServerQuery } from '../../hooks';
import { GetMasseurs, GetMasseursResponse } from '../../server';
import { useCurrentMasseur } from '../../hooks';

import Plug from '../../assets/images/plug.jpg';

export const Team: FC = () => {
  const [index, setIndex] = useState(0);

  const { data } = useServerQuery('masseurs', GetMasseurs, undefined);

  const imgAddress = process.env.REACT_APP_IMG_ADDRESS;
  const { SetMasseur } = useCurrentMasseur();

  const handleClickMasseur = () => {
    SetMasseur(data![index]);
  };

  const clickHandler = (count: number) => {
    let quantity = index + count;

    if (quantity > data!.length - 1) {
      quantity = 0;
    } else if (quantity < 0) {
      quantity = data!.length - 1;
    }

    setIndex(quantity);
  };

  return (
    <TeamWrapper id="team">
      <TeamContainer>
        <TeamContent>
          <TeamInfo>
            <TeamTitle>Наша команда</TeamTitle>
            <TeamName>
              {data && `${data[index].firstName} ${data[index].lastName}`}
            </TeamName>
            <TeamInfoPanel>
              <TeamSubtitle>Род деятельности:</TeamSubtitle>
              <TeamText>{data && data[index].occupation}</TeamText>
            </TeamInfoPanel>
            <TeamInfoPanel>
              <TeamSubtitle>О мастере:</TeamSubtitle>
              <TeamText>{data && data[index].description}</TeamText>
            </TeamInfoPanel>
          </TeamInfo>
          {/* <TeamButton onClick={() => handleClickMasseur()}>
            Записаться
          </TeamButton> */}
          <TeamButton
            as={Link}
            to="/record"
            onClick={() => handleClickMasseur()}
          >
            Записаться
          </TeamButton>
          <TeamSliderController
            quantityNow={index + 1}
            quantityTotal={data?.length || 0}
            onClickLeftArrow={() => clickHandler(-1)}
            onClickRightArrow={() => clickHandler(1)}
          />
        </TeamContent>
        <TeamImage
          src={(data && imgAddress + data[index].src) || Plug}
          alt=""
        />
      </TeamContainer>
    </TeamWrapper>
  );
};
