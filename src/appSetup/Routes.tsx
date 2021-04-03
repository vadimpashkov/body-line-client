import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, LoginPage, RegPage } from '../pages';

import { Secure } from './SecureRoute';

export const Routes: FC = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>

    <Route path="/login" exact>
      <LoginSecure>
        <LoginPage />
      </LoginSecure>
    </Route>

    <Route path="/registration" exact>
      <LoginSecure>
        <RegPage />
      </LoginSecure>
    </Route>

    <Redirect to="/" />
  </Switch>
);

export const appValidation = (tokenToCheck: string) => tokenToCheck.length > 0;
export const loginValidation = (tokenToCheck: string) => tokenToCheck.length === 0;

type SecureProps = {
  children: JSX.Element;
};

export const ApplicationSecure: FC<SecureProps> = (props) => (
  <Secure validation={appValidation} redirect="/login">
    {props.children}
  </Secure>
);

export const LoginSecure: FC<SecureProps> = (props) => (
  <Secure validation={loginValidation} redirect="/">
    {props.children}
  </Secure>
);
