import { FC } from 'react';

import {
  ConsultationWrapper,
  ConsultationContainer,
  ConsultationTitle,
  ConsultationText,
} from './Consultation.elements';

import { ConsultationForm } from '../ConsultationForm';

export const Consultation: FC = () => {
  return (
    <ConsultationWrapper>
      <ConsultationContainer>
        <ConsultationTitle invert>Консультация</ConsultationTitle>
        <ConsultationText>
          Наши специалисты молниеносно ответят на любой Ваш вопрос
        </ConsultationText>
        <ConsultationForm />
      </ConsultationContainer>
    </ConsultationWrapper>
  );
};
