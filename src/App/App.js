import React, { Component } from 'react';
import { projectsRef } from '../services/firebase';
import Header from './Header';
import Routes from './Routes';

class App extends Component {

  constructor() {
    super();

    this.state = {
      ready: false,
      categories: null,
      projects: null
    };
  }

  componentDidMount() {
    projectsRef.on('value', (snapshot) => {
      const rawData = snapshot.val();
      let projects = [], categories = [];

      Object.keys(rawData).forEach(p => {
        // create array of projects
        projects.push(rawData[p]);
        // get unique categories
        if (categories.indexOf(rawData[p].category) < 0) categories.push(rawData[p].category);
      });

      this.setState({
        categories,
        projects,
        ready: true
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.ready ?
          <div>
            <Header categories={this.state.categories} />
            <Routes projects={this.state.projects}/>
          </div>
          : <p>loading...</p>
        }
      </div>
    );
  }
}

export default App;
