/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function HeaderContainer({ children, signin = true }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        {signin ? <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> : null}
      </Header.Frame>
      {children}
    </Header>
  );
}
