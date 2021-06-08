import { FC } from 'react';
import {
  FooterBlock,
  FooterContainer,
  Copyright,
  WorkingHours,
} from './Footer.elements';

export const Footer: FC = () => {
  return (
    <FooterBlock>
      <FooterContainer>
        <WorkingHours>Мы работаем ежедневно с 9 до 22 часов.</WorkingHours>
        <Copyright>
          © Body-Line {new Date().getFullYear()}. Все права защищены
        </Copyright>
      </FooterContainer>
    </FooterBlock>
  );
};
