import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { TitleH1 } from '../Titles';
import { Button } from '../Buttons';
import DecorationText from '../DecorationText';
import { Links } from '../Links';

import { pxToRem, responsive } from '../../styles/mixins';
import { device } from '../../styles/Variables';

import BannerImage from '../../assets/images/banner.png';

const BannerStyles = styled.section`
  background-color: ${({ theme }) => theme.palette.font};

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;

    @media ${device.sm} {
      text-align: center;
    }
  }

  .content {
    z-index: 3;

    @media ${device.sm} {
      display: flex;
      flex-flow: column;
      justify-content: center;
      width: 100%;
    }
  }

  .title {
    max-width: 420px;
    margin-left: ${pxToRem(74)};
    margin-bottom: ${pxToRem(27)};

    @media ${device.sm} {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .btn {
    margin-left: ${pxToRem(74)};

    @media ${device.sm} {
      margin-left: 0;
      margin: 0 auto;
      width: 80%;
    }

    @media ${device.xs} {
      width: 100%;
    }
  }

  .links {
    position: absolute;
    left: 30px;
    bottom: ${pxToRem(27)};

    @media ${device.sm} {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .image {
    position: absolute;
    /* transform: rotate(-5.5deg); */
    right: 24%;
    margin-top: 90px;
    height: 90%;
    z-index: 1;

    @media ${device.sm} {
      display: none;
    }
  }

  .decoration {
    position: absolute;
    right: 30px;
    bottom: 0;

    @media ${device.sm} {
      display: none;
    }
  }
`;

const Description = styled.div`
  margin-bottom: ${pxToRem(54)};
  font-size: ${responsive(16, 24)};
  color: ${({ theme }) => theme.palette.background};

  .line {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: ${pxToRem(2)};

    :before {
      content: '';
      display: inline-block;
      margin-right: ${pxToRem(16)};
      width: 60px;
      height: 1px;
      background-color: ${({ theme }) => theme.palette.background};

      @media ${device.sm} {
        display: none;
      }
    }
  }

  .line {
    @media ${device.sm} {
      display: inline-block;
      text-align: center;
    }
  }

  .string {
    margin-left: ${pxToRem(74)};

    @media ${device.sm} {
      margin-left: 0;
    }
  }
`;

const Banner: FC = () => {
  return (
    <BannerStyles>
      <Wrapper className="wrapper">
        <div className="content">
          <TitleH1 className="title">Массажный салон Body-Line</TitleH1>
          <Description>
            <p className="line">Человеческое тело -</p>
            <p className="string">лучшая картина человеческой души</p>
          </Description>
          <Button border className="btn">
            Хочу массаж
          </Button>
          <Links className="links" />
        </div>
        <img className="image" src={BannerImage} alt="Масло для массажа" />
        <DecorationText className="decoration" inverse vertical length={pxToRem(90)}>
          Листай дальше
        </DecorationText>
      </Wrapper>
    </BannerStyles>
  );
};

export default Banner;
