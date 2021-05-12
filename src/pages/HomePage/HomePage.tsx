import { FC } from 'react';

import { MainLayout } from '../Layout';

import {
  Banner,
  AboutUs,
  MassageTypes,
  Consultation,
  Team,
  Contacts,
} from '../../components';

export const Home: FC = () => (
  <MainLayout>
    <Banner />
    <AboutUs />
    <MassageTypes />
    <Consultation />
    <Team />
    <Contacts />
  </MainLayout>
);
