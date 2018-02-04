import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    const { categories } = this.props;

    return (
      <ul>
        <li><Link to="/">Joel Gunz</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        {categories && categories.map((c, i) => {
          return (
            <li key={i}>
              <Link to={`/${c.toLowerCase()}`}>{c}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default connect(
  state => ({ categories: state.data.categories }),
  null
)(Header);