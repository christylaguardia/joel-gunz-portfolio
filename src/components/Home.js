import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../data/portfolio.json';
import '../styles/Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      portfolio: portfolio,
      advertising: true,
      creative: true
    };

    this.toggleAdvertising = this.toggleAdvertising.bind(this);
    this.toggleCreative = this.toggleCreative.bind(this);
    this.getClassName = this.getClassName.bind(this);
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
    this.state.portfolio.sort((a ,b) => a.id < b.id);

    return (
      <div>
        <label className={this.state.advertising ? 'toggle checked' : 'toggle unchecked'}>
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
        </label>

        <div id="project-container">
          {this.state.portfolio.map(project => {
            return (
              <div
                key={project.id}
                className={this.getClassName(project)}
              >
                <Link to={`/${project.path}`}>
                  {project.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
