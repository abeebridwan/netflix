import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect } from './helpers/routes';

function App() {
  const user = {};

  return (
    <Router>
      <Switch>
        <IsUserRedirect exact path={ROUTES.SIGN_IN} loggedInPath={ROUTES.BROWSE} user={user}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect exact path={ROUTES.SIGN_UP} loggedInPath={ROUTES.BROWSE} user={user}>
          <Signup />
        </IsUserRedirect>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
