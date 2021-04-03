import { FC } from 'react';
import { Banner, AboutUs, Massage, Consultation, Team, Reviews, Contacts } from '../components';

const HomePage: FC = () => (
  <>
    <Banner />
    <AboutUs />
    <Massage />
    <Consultation />
    <Team />
    <Reviews />
    <Contacts />
  </>
);

export default HomePage;
