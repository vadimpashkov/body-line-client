import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { TitleH2 } from '../Titles';
import InfoPanel from '../InfoPanel';
import { Links } from '../Links';

import { pxToRem } from '../../styles/mixins';
import { device } from '../../styles/Variables';

import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';

const ContactsStyles = styled.section`
  background-color: ${({ theme }) => theme.palette.font};

  .wrapper {
    padding-top: ${pxToRem(72)};
    padding-bottom: ${pxToRem(72)};

    @media ${device.sm} {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }

  .title {
    margin-bottom: ${pxToRem(72)};

    @media ${device.sm} {
      text-align: center;
    }
  }
`;

const InfoPanels = styled.div`
  display: flex;
  gap: ${pxToRem(72)};
  margin-bottom: ${pxToRem(72)};

  @media ${device.sm} {
    flex-flow: column;
  }
`;

const Contacts: FC = () => {
  return (
    <ContactsStyles>
      <Wrapper className="wrapper">
        <TitleH2 inverse className="title">
          Контакты
        </TitleH2>
        <InfoPanels>
          <InfoPanel title="Адрес" text="г. Челябинск, ул. Савина, дом 18">
            <LocationIcon className="icon" />
          </InfoPanel>
          <InfoPanel title="E-mail" text="bodyline@gmail.com">
            <EmailIcon className="icon" />
          </InfoPanel>
          <InfoPanel title="Телефон" text="+7 (900) 555-35-35">
            <PhoneIcon className="icon" />
          </InfoPanel>
        </InfoPanels>
        <Links />
      </Wrapper>
    </ContactsStyles>
  );
};

export default Contacts;
