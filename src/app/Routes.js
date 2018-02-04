import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Menu from '../showcase/Menu';
import Page from '../showcase/Page';

const Routes = () => (
  <Switch>
    <Route exact path="/:filter?" component={Menu} />
    <Route path="/:filter/:page" component={Page} />
    <Route exact path="/login" component={Auth} />
    {/* <Redirect to="/" /> */}
  </Switch>
);

export default Routes;