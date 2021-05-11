import { FC } from 'react';
import { Link } from 'react-router-dom';

import { pxToRem } from '../../styles/mixins';

import {
  BannerStyles,
  BannerContainer,
  BannerContent,
  BannerTitle,
  Description,
  BannerButton,
  BannerDecorationText,
  BannerLinks,
  Image,
} from './Banner.elements';

import BannerImage from '../../assets/images/banner.png';

export const Banner: FC = () => {
  return (
    <BannerStyles>
      <BannerContainer>
        <BannerContent>
          <BannerTitle invert>
            Массажный
            <br />
            салон
            <br />
            Body-Line
          </BannerTitle>
          <Description>
            <p className="line">Человеческое тело -</p>
            <p className="string">лучшая картина человеческой души</p>
          </Description>
          <BannerButton as={Link} to="/record" border="true">
            Хочу массаж
          </BannerButton>
          <BannerLinks />
        </BannerContent>
        <Image src={BannerImage} alt="Масло для массажа" />
        <BannerDecorationText invert vertical length={pxToRem(90)}>
          Листай дальше
        </BannerDecorationText>
      </BannerContainer>
    </BannerStyles>
  );
};
