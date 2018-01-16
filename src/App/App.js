import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { projectsRef } from '../services/firebase';
import Header from './Header';
import Menu from './Menu';
import Login from './Login';

class App extends Component {

  state = {
    ready: false,
    categories: null,
    projects: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log('fetching data');

    return projectsRef.on('value', (snapshot) => {
      const rawData = snapshot.val();
      let data = { projects: [], categories: [] };

      Object.keys(rawData).forEach(p => {
        // create array of projects
        let project = rawData[p];
        project.path = p;
        data.projects.push(project);

        // get unique categories
        if (data.categories.indexOf(rawData[p].category) < 0) data.categories.push(rawData[p].category);
      });
      
      console.log('data fetched', data);
      
      this.setState({
        categories: data.categories,
        projects: data.projects,
        ready: true
      });
    });
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.ready ? (
            <div>
              <Header />
              <Route exact path="/" render={() => <Menu projects={this.state.projects} />} />
              <Route path="/login" component={Login} />
            </div>
          ) : <p>loading...</p>}
        </div>
      </Router>
    );
  }
}

export default App;