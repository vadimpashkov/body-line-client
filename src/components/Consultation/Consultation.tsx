import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { TitleH2 } from '../Titles';
import { Text } from '../Text';
import { ConsultationForm } from '../Forms';

import { pxToRem, responsive } from '../../styles/mixins';
import { device } from '../../styles/Variables';

const ConsultationStyled = styled.section`
  background-color: ${({ theme }) => theme.palette.font};

  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: ${pxToRem(72)};
    padding-bottom: ${pxToRem(72)};
  }

  .title {
    margin-bottom: ${pxToRem(16)};
  }

  .text {
    text-align: center;
  }

  .mark {
    margin-bottom: ${responsive(27, 54)};
    max-width: 370px;
  }

  .form {
    display: flex;
    gap: ${pxToRem(16)};
    margin-bottom: ${pxToRem(27)};

    @media ${device.xs} {
      flex-flow: column;
      width: 100%;
    }
  }
`;

const Consultation: FC = () => {
  return (
    <ConsultationStyled>
      <Wrapper className="wrapper">
        <TitleH2 className="title" inverse>
          Консультация
        </TitleH2>
        <Text className="text mark">Наши специалисты молниеносно ответят на любой Ваш вопрос</Text>
        <ConsultationForm className="form" />
      </Wrapper>
    </ConsultationStyled>
  );
};

export default Consultation;
