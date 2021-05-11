import { FC } from 'react';
import { FooterBlock, FooterContainer, Copyright } from './Footer.elements';

export const Footer: FC = () => {
  return (
    <FooterBlock>
      <FooterContainer>
        <Copyright>© Body-Line {new Date().getFullYear()}. Все права защищены</Copyright>
      </FooterContainer>
    </FooterBlock>
  );
};
