import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../Home/About';
import Project from '../Project/Project';

const Routes = ({ projects }) => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Home projects={projects} />} />
      <Route exact path="/about" component={About} />
      <Route path="/:id" component={Project} />
    </Switch>
  </Router>
);

export default Routes;