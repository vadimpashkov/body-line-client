import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PanelLayout } from '../Layout';
import { SignInForm } from '../../components';

import {
  SignInWrapper,
  SignInContainer,
  SignInText,
  SignInLink,
} from './SignInPage.elements';

export const SignIn: FC = () => {
  return (
    <PanelLayout>
      <SignInWrapper>
        <SignInText>
          Нет аккаунта?{' '}
          <SignInLink as={Link} to="/signup">
            Зарегистрируйтесь сейчас
          </SignInLink>
        </SignInText>
        <SignInContainer>
          <SignInForm />
        </SignInContainer>
      </SignInWrapper>
    </PanelLayout>
  );
};
