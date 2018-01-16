import React from 'react';
import { Link } from 'react-router-dom';
// import Categories from './Categories';
import Tile from './Tile';
// import './Home.css';

export default class Home extends React.Component {

  state = {
    projects: null,
    advertising: true,
    creative: true
  };

  // componentWillMount() {
  //   this.setState({ projects: this.props.projects });
  // }

  getClassName({ category }) {
    if (category === 'Advertising') {
      return this.state.advertising ? 'tile visible' : 'tile hidden';
    } else if (category === 'Creative') {
      return this.state.creative ? 'tile visible' : 'tile hidden';
    }
  }

  render() {
    // this.props.projects.sort((a, b) => a.sequence > b.sequence);

    return (
      <div>
        Home
        {/* <Categories /> */}
        {/* {this.props.projects && */}
        {/* <div id="project-container">
          {this.props.projects.map(project => <Tile project={project} /> )}
        </div> */}
        {/* } */}
      </div>
    );
  }
}
