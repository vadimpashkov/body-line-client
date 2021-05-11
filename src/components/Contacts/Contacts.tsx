import { FC } from 'react';
import { InfoPanel } from '../InfoPanel';

import {
  ContactsWrapper,
  ContactsContainer,
  ContactsTitle,
  ContactsInfoPanels,
  ContactsLinks,
} from './Contacts.elements';

import IconSpriteContacts from '../../assets/contacts.svg';
import IconSpriteMenu from '../../assets/menu.svg';

export const Contacts: FC = () => {
  return (
    <ContactsWrapper>
      <ContactsContainer>
        <ContactsTitle invert>Контакты</ContactsTitle>
        <ContactsInfoPanels>
          <InfoPanel href={IconSpriteContacts + '#address'} title="Адрес" text="г. Челябинск, ул. Савина, дом 18" />
          <InfoPanel href={IconSpriteContacts + '#email'} title="E-mail" text="bodyline@gmail.com" />
          <InfoPanel href={IconSpriteMenu + '#phone'} title="Телефон" text="+7 (900) 555-35-35" />
        </ContactsInfoPanels>
        <ContactsLinks />
      </ContactsContainer>
    </ContactsWrapper>
  );
};
