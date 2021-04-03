import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { Text } from '../Text';

import { pxToRem, responsive } from '../../styles/mixins';
import { device, palette } from '../../styles/Variables';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

const FooterStyles = styled.footer`
  background-color: #282828;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${pxToRem(16)};
    padding-top: ${pxToRem(24)};
    padding-bottom: ${pxToRem(24)};
    /* height: 80px; */
    color: ${({ theme }) => theme.palette.background};

    @media ${device.sm} {
      flex-flow: column;
      text-align: center;
    }
  }

  .logo {
    width: ${responsive(90, 100)};
    fill: ${palette.white};
  }

  .copy {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

const Footer: FC = () => {
  return (
    <FooterStyles>
      <Wrapper className="wrapper">
        <LogoIcon className="logo" />
        <Text>&copy; Body-Line 2021. All rights reserved</Text>
      </Wrapper>
    </FooterStyles>
  );
};

export default Footer;
