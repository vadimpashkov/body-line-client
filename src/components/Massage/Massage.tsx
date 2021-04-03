import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useServer, useTouch } from '../../hooks';
import { GetMassageTypes, GetMassageTypesResponse } from '../../server';

import { Wrapper } from '../Wrapper';
import { TitleH2, TitleH3 } from '../Titles';
import { Text } from '../Text';
import { Button } from '../Buttons';
import DecorationText from '../DecorationText';

import { addAlpha, pxToRem, responsive } from '../../styles/mixins';
import { anim, device, font } from '../../styles/Variables';

import Plug from '../../assets/images/plug.jpg';

const MassageStyles = styled.section`
  .title {
    margin-bottom: ${responsive(42, 72)};
  }

  .name {
    margin-bottom: ${pxToRem(16)};
  }

  .desc {
    margin-bottom: ${responsive(24, 36)};
    /* white-space: pre-wrap; */
  }

  .btn {
    @media ${device.xs} {
      width: 100%;
    }
  }
`;

const PreviewImg = styled.img`
  max-height: 420px;

  @media ${device.sm} {
    max-height: initial;
    height: ${responsive(260, 500)};
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${responsive(36, 54)};
  margin-bottom: ${responsive(36, 54)};

  @media ${device.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  .decoration-text {
    margin-right: ${pxToRem(16)};

    @media ${device.sm} {
      justify-content: flex-start;
      writing-mode: initial;
      margin-bottom: ${pxToRem(16)};

      :after {
        margin-top: 0;
        margin-left: ${pxToRem(16)};
        width: ${pxToRem(45)};
        height: 1px;
      }
    }
  }

  @media ${device.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const ImagesScroll = styled.div`
  display: flex;
  column-gap: ${pxToRem(16)};
  height: 200px;
  /* overflow-x: hidden; */
  /* cursor: grab; */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const ImageBlock = styled.div`
  position: relative;
  scroll-snap-align: start;
  min-width: 320px;
  max-width: 320px;

  @media ${device.xxs} {
    min-width: 260px;
    max-width: 260px;
  }

  /* :hover {
    :after {
      opacity: 0;
    }

    .img {
      filter: grayscale(0) contrast(1);
    }
  } */

  :after {
    content: attr(data-massage-name);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${pxToRem(16)} ${pxToRem(32)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: ${font.family.title.name};
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.palette.background};
    background-color: ${({ theme }) => addAlpha(theme.palette.font, 0.75)};
    transition: opacity ${anim.duration} linear;
    cursor: pointer;
  }
`;

const Massage: FC = () => {
  const [massage, setMassage] = useState<GetMassageTypesResponse[]>([]);
  const [previewMassage, setPreviewMassage] = useState<GetMassageTypesResponse>();

  // const touch = useTouch(this);
  const getMassage = useServer(GetMassageTypes);

  const loading = getMassage.state.fetching;
  const fetched = getMassage.isFetched;
  const success = !loading && getMassage.state.answer.success;

  useEffect(() => {
    if (success) {
      setMassage(getMassage.state.answer.data!);
      setPreviewMassage(getMassage.state.answer.data![0]);
    }

    getMassage.reload();
  }, [success, fetched]);

  useEffect(() => {
    getMassage.fetch(undefined);
  }, []);

  return (
    <MassageStyles>
      <Wrapper className="wrapper">
        <TitleH2 className="title">Виды массажа</TitleH2>
        <Content>
          <PreviewImg
            className="img"
            src={
              previewMassage?.image
                ? process.env.REACT_APP_PROXY_ADDRESS + '/img/massage-types/' + previewMassage?.image
                : Plug
            }
            alt=""
          />
          <div className="info">
            <TitleH3 className="name">{previewMassage?.name || ''}</TitleH3>
            <Text className="desc">{`${previewMassage?.description.substring(0, 420)}...` || ''}</Text>
            <Button className="btn">Подробнее</Button>
          </div>
        </Content>
        <Gallery>
          <DecorationText className="decoration-text" vertical length={pxToRem(116)}>
            Все виды
          </DecorationText>
          <ImagesScroll>
            {massage.map((mass) => (
              <ImageBlock data-massage-name={mass.name} onClick={() => setPreviewMassage(mass)} key={mass.id}>
                <img
                  className="img"
                  src={mass.image ? process.env.REACT_APP_PROXY_ADDRESS + '/img/massage-types/' + mass.image : Plug}
                  alt=""
                />
              </ImageBlock>
            ))}
          </ImagesScroll>
        </Gallery>
      </Wrapper>
    </MassageStyles>
  );
};

export default Massage;
