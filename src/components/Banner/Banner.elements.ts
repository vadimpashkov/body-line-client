import styled from 'styled-components';

import { Title, DecorationText, Links } from '../../components';
import { Container, Button } from '../../styles/GlobalStyles';

import { device } from '../../styles/Variables';
import { pxToRem, responsive } from '../../styles/mixins';

export const BannerStyles = styled.section`
  background-color: var(--color-background-primary-invert);
  overflow: hidden;
`;

export const BannerContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(100vh - var(--height-header));

  @media ${device.sm} {
    text-align: center;
  }
`;

export const BannerContent = styled.div`
  z-index: var(--z-banner-content);

  @media ${device.sm} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  }
`;

export const BannerTitle = styled(Title)`
  font-size: var(--size-title-banner);
  line-height: ${responsive(58, 100)};
  margin-left: ${pxToRem(74)};
  margin-bottom: ${pxToRem(27)};
  user-select: initial;

  @media ${device.sm} {
    margin-left: initial;
    margin-right: initial;
  }
`;

export const BannerButton = styled(Button)`
  margin-left: ${pxToRem(74)};

  @media ${device.sm} {
    margin-left: 0;
    margin: 0 auto;
    width: 80%;
    margin-bottom: var(--margin-standard);
  }

  @media ${device.xs} {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  /* transform: rotate(-5.5deg); */
  right: 24%;
  margin-top: 90px;
  height: 90%;
  z-index: 1;

  @media ${device.sm} {
    display: none;
  }
`;

export const Description = styled.div`
  margin-bottom: var(--margin-standard);
  font-size: ${responsive(16, 24)};
  color: var(--color-font-primary-invert);

  @media ${device.sm} {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .line {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: ${pxToRem(2)};

    &:before {
      content: '';
      display: inline-block;
      margin-right: ${pxToRem(16)};
      width: 60px;
      height: 1px;
      background-color: var(--color-background-primary);

      @media ${device.sm} {
        display: none;
      }
    }
  }

  .string {
    margin-left: ${pxToRem(74)};

    @media ${device.sm} {
      margin-left: 0;
    }
  }
`;

export const BannerDecorationText = styled(DecorationText)`
  position: absolute;
  right: var(--padding-container);
  bottom: 0;

  @media ${device.sm} {
    display: none;
  }
`;

export const BannerLinks = styled(Links)`
  position: absolute;
  left: var(--padding-container);
  bottom: var(--padding-container);

  @media ${device.sm} {
    position: initial;
    left: initial;
    bottom: initial;
    margin: 0 auto;
  }
`;
