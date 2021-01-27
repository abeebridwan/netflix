import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();
  console.log(user);

  return (
    <Router>
      <Switch>
        <IsUserRedirect exact path={ROUTES.SIGN_IN} loggedInPath={ROUTES.BROWSE} user={user}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect exact path={ROUTES.SIGN_UP} loggedInPath={ROUTES.BROWSE} user={user}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect exact path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE} user={user}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
