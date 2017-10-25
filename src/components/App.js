import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import About from './About';
import Home from './Home';
import Project from './Project';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Joel's Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/:id" component={Project}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
