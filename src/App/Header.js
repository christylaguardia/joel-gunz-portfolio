import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Categories({ categories }) {
  let toggleClass = 'toggle unchecked';

  return (
    <Router>
      <div>
        <Link to="/">Joel's Portfolio</Link>
        <Link to="/about">About</Link>
      
        {categories.map((category, item) => {
          return (
            <label key={item} className={toggleClass}>
              <input
                type="checkbox"
                // checked={this.state.advertising}
                onChange={() => this.toggleCategory()} />
              {category.category}
            </label>
          );
        })}

      </div>
    </Router>
  );
}

export default Categories;