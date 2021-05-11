import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PanelLayout } from '../Layout/PanelLayout';
import { SignUpForm } from '../../components';

import {
  SignUpWrapper,
  SignUpContainer,
  SignUpLink,
  SignUpText,
} from './SignUpPage.elements';

export const SignUp: FC = () => {
  return (
    <PanelLayout>
      <SignUpWrapper>
        <SignUpText>
          У вас уже есть аккаунт?{' '}
          <SignUpLink as={Link} to="/signin">
            Войдите сейчас
          </SignUpLink>
        </SignUpText>
        <SignUpContainer>
          <SignUpForm />
        </SignUpContainer>
      </SignUpWrapper>
    </PanelLayout>
  );
};
