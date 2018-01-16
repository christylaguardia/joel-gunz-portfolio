import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Categories extends React.Component {

  componentDidMount() {
    this.props.categories.forEach(category => this.setState({ [category]: true }));
  }

  handleOnChange(category) {
    this.setState({ [category]: !this.state[category] });
  }

  render() {
    const { categories } = this.props;
    console.log('categories', categories);
    let toggleClass = 'toggle unchecked';

    return (
      <Router>
        <div>
          {categories.map((c, i) => {
            return (
              <label key={i} className={this.state[c] ? 'visible' : 'hidden'}>
                <input
                  type="checkbox"
                  // checked={this.state[c]}
                  onChange={() => this.handleOnChange(c)} />
                {c}
              </label>
            );
          })}

        </div>
      </Router>
    );
  }
}

export default Categories;