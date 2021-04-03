import { FC } from 'react';
import styled from 'styled-components';

import { LoginForm } from '../components/Forms';

import { pxToRem } from '../styles/mixins';

import Img from '../assets/images/login.jpg';

const Login = styled.section`
  margin-top: 60px;
  min-height: calc(100vh - ${pxToRem(77)} - 60px);
  display: grid;
  place-items: center;
  background: url(${Img}) no-repeat center/cover fixed;
`;

const LoginPage: FC = () => {
  return (
    <Login>
      <LoginForm />
    </Login>
  );
};

export default LoginPage;
