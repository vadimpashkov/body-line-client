import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { TitleH2, TitleH3 } from '../Titles';
import { Text } from '../Text';
import { Button } from '../Buttons';
import { SliderController } from '../SliderController';

import { useServer } from '../../hooks';
import { GetMasseurs, GetMasseursResponse } from '../../server';

import { pxToRem, responsive } from '../../styles/mixins';
import { device, font } from '../../styles/Variables';

import Plug from '../../assets/images/plug.jpg';

const TeamStyles = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${responsive(36, 54)};

    @media ${device.md} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      gap: ${responsive(24, 36)};
    }
  }

  .content {
    display: grid;
    grid-template: 1fr auto / 1fr 1fr;
    row-gap: ${responsive(24, 36)};

    @media ${device.xs} {
      grid-template: initial;
      grid-template-columns: 1fr;
    }
  }

  .info {
    grid-column: 1 / 3;

    @media ${device.md} {
      grid-column: 1 / -1;
    }
  }

  .title {
    margin-bottom: ${responsive(36, 54)};
  }

  .name {
    margin-bottom: ${responsive(24, 36)};
    text-transform: none;
  }

  .btn {
    grid-row-start: 2;
    justify-self: start;

    @media ${device.xs} {
      width: 100%;
    }
  }

  .controller {
    grid-row-start: 2;
    justify-self: end;

    @media ${device.xs} {
      grid-column: 1 / -1;
      grid-row-start: 3;
      justify-self: center;
    }
  }
`;

const InfoPanel = styled.div`
  margin-bottom: ${responsive(18, 27)};

  :last-child {
    margin-bottom: 0;
  }

  .heading {
    font-family: ${font.family.title.name};
    font-weight: 500;
    margin-bottom: ${pxToRem(10)};
  }
`;

const Image = styled.img`
  max-height: 720px;
  min-height: 720px;

  @media ${device.md} {
    max-height: ${responsive(260, 520)};
    min-height: ${responsive(260, 520)};
  }
`;

const Team: FC = () => {
  const [index, setIndex] = useState(0);
  const [masseurs, setMasseurs] = useState<GetMasseursResponse[]>([]);

  const getMasseurs = useServer(GetMasseurs);

  const loading = getMasseurs.state.fetching;
  const fetched = getMasseurs.isFetched;
  const success = !loading && getMasseurs.state.answer.success;

  useEffect(() => {
    if (success) {
      setMasseurs(getMasseurs.state.answer.data!);
      // console.log(getMasseurs.state.answer.data);
    }

    getMasseurs.reload();
  }, [success, fetched]);

  useEffect(() => {
    getMasseurs.fetch(undefined);
  }, []);

  const clickHandler = (count: number) => {
    let quantity = index + count;

    if (quantity > masseurs.length - 1) {
      quantity = 0;
    } else if (quantity < 0) {
      quantity = masseurs.length - 1;
    }
    setIndex(quantity);
  };

  return (
    <TeamStyles>
      <Wrapper className="wrapper">
        <div className="content">
          <div className="info">
            <TitleH2 className="title">Наша команда</TitleH2>
            <TitleH3 className="name">
              {`${masseurs![index]?.users.firstname} ${masseurs![index]?.users.lastname}`}
            </TitleH3>
            <InfoPanel>
              <h3 className="heading">Род деятельности:</h3>
              <Text className="desc">{masseurs![index]?.occupation}</Text>
            </InfoPanel>
            <InfoPanel>
              <h3 className="heading">О мастере:</h3>
              <Text className="desc">{masseurs![index]?.description}</Text>
            </InfoPanel>
          </div>
          <Button className="btn">Записаться</Button>
          <SliderController
            className="controller"
            total={masseurs!.length}
            quantityNow={index + 1}
            onClickLeftArrow={() => clickHandler(-1)}
            onClickRightArrow={() => clickHandler(1)}
          />
        </div>
        <Image
          className="img"
          src={
            masseurs![index]
              ? process.env.REACT_APP_PROXY_ADDRESS + '/img/users/' + masseurs![index]?.users.image
              : Plug
          }
          alt={`${masseurs![index]?.users.firstname} ${masseurs![index]?.users.lastname}`}
        />
      </Wrapper>
    </TeamStyles>
  );
};

export default Team;
