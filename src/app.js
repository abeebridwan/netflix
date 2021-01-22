import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
