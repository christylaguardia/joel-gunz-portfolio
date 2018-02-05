import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Admin from '../admin/Admin';
import Menu from '../showcase/Menu';
import Page from '../showcase/Page';

// const Protected = pathname => ({ valid, component: Component, render, ...rest }) => (
//   <Route {...rest} render={props => {

//     if (valid) return render ? render(props) : <Component {...props} />;

//     return <Redirect to={{
//       pathname,
//       state: { from: props.location }
//     }} />;

//   }} />
// );

// export const PrivateRoute = connect(
//   ({ token }) => ({
//     valid: !!token
//   }),
//   null
// )(Protected('/account/signin'));

const Private = (path) => ({ secure, component: Component, render, ...rest }) => (
  <Route {...rest} render={props => {
    if (secure) return render ? render(props) : <Component {...props} />;
    return <Redirect to={{path, state: { from: props.location }}} />;
  }} />
);

const PrivateRoute = connect(
  ({ token }) => ({ secure: !!token }),
  null
)(Private('/'));

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/admin" component={Admin} />
    <Route exact path="/login" component={Auth} />
    <Route exact path="/:filter?" component={Menu} />
    <Route path="/:filter/:page" component={Page} />
    {/* <Redirect to="/" /> */}
  </Switch>
);

export default Routes;