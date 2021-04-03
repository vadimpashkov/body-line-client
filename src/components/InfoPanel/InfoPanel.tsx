import { FC, ReactChild } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/mixins';

import { device, font } from '../../styles/Variables';

const InfoPanelStyles = styled.div`
  display: flex;

  @media ${device.sm} {
    flex-flow: column;
    align-items: center;
    text-align: center;
  }
`;

const Icon = styled.div`
  display: inline-block;
  margin-right: ${pxToRem(16)};

  @media ${device.sm} {
    /* width: 100%; */
    margin-right: 0;
    /* margin-right: ${pxToRem(24)}; */
  }

  .icon {
    fill: ${({ theme }) => theme.palette.background};
    width: ${pxToRem(27)};
    height: initial;

    @media ${device.sm} {
      width: ${pxToRem(48)};
      margin-bottom: ${pxToRem(18)};
    }
  }
`;

const Title = styled.p`
  display: inline-block;
  margin-bottom: ${pxToRem(16)};
  font-family: ${font.family.title.name}, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.background};
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.palette.primary};
  max-width: 176px;

  @media ${device.sm} {
    max-width: initial;
  }
`;

type InfoPanelProps = {
  title: string;
  text: string;
  children: ReactChild;
};

const InfoPanel: FC<InfoPanelProps> = ({ title, text, children }: InfoPanelProps) => {
  return (
    <InfoPanelStyles>
      <Icon>{children}</Icon>
      <div className="content">
        <Title>{title}:</Title>
        <Desc>{text}</Desc>
      </div>
    </InfoPanelStyles>
  );
};

export default InfoPanel;
