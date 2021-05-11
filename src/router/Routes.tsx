import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, SignIn, SignUp, Record } from '../pages';

import { Secure } from './SecureRoute';

export const Routes: FC = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/signin" exact>
      <LoginSecure>
        <SignIn />
      </LoginSecure>
    </Route>

    <Route path="/signup" exact>
      <LoginSecure>
        <SignUp />
      </LoginSecure>
    </Route>

    <Route path="/record" exact>
      <ApplicationSecure>
        <Record />
      </ApplicationSecure>
    </Route>

    <Redirect to="/" />
  </Switch>
);

export const appValidation = (tokenToCheck: string) => tokenToCheck.length > 0;
export const loginValidation = (tokenToCheck: string) =>
  tokenToCheck.length === 0;

type SecureProps = {
  children: JSX.Element;
};

export const ApplicationSecure: FC<SecureProps> = (props) => (
  <Secure validation={appValidation} redirect="/signin">
    {props.children}
  </Secure>
);

export const LoginSecure: FC<SecureProps> = (props) => (
  <Secure validation={loginValidation} redirect="/">
    {props.children}
  </Secure>
);
