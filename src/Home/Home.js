import React from 'react';
import { Link } from 'react-router-dom';
import Tile from './Tile';
import './Home.css';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: null,
      advertising: true,
      creative: true
    };

    this.toggleAdvertising = this.toggleAdvertising.bind(this);
    this.toggleCreative = this.toggleCreative.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  componentWillMount() {
    this.setState({ projects: this.props.projects });
  }

  toggleAdvertising() {
    this.setState({ advertising: !this.state.advertising });
    
    if (this.state.advertising && !this.state.creative) {
      this.setState({ creative: !this.state.creative });
    }
  }
  
  toggleCreative() {
    this.setState({ creative: !this.state.creative });
    
    if (!this.state.advertising && this.state.creative) {
      this.setState({ advertising: !this.state.advertising });
    }
  }

  getClassName({ category }) {
    if (category === 'advertising') {
      return this.state.advertising ? 'project visible' : 'project hidden';
    } else if (category === 'creative') {
      return this.state.creative ? 'project visible' : 'project hidden';
    }
  }

  render() {
    // console.log('this.state.projects in Home render()', this.state.projects);
    this.state.projects.sort((a, b) => a.sequence < b.sequence);

    return (
      <div>

        {/* <label className={this.state.advertising ? 'toggle checked' : 'toggle unchecked'}>
          <input
            type="checkbox"
            checked={this.state.advertising}
            onChange={() => this.toggleAdvertising()} />
          Advertising
        </label>

        <label className={this.state.creative ? 'toggle checked' : 'toggle unchecked'}>
          <input
            type="checkbox"
            checked={this.state.creative}
            onChange={() => this.toggleCreative()} />
          Creative
        </label> */}

        {this.state.projects &&
          <div id="project-container">
            {this.state.projects.map(project => <Tile project={project} className={this.getClassName(project)} /> )}
          </div>
        }

      </div>
    );
  }
}
