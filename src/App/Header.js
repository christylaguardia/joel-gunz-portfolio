import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ categories }) => {
  console.log('categories in header', categories);
  return (
    <nav>
      <Link to="/">Joel Gunz</Link>
      <Link className="right" to="/about">About</Link>
      {/* {categories && categories.map((c, i) => {
        return (
          <li key={i}>
            <Link to={`/${c}`}>{c}</Link>
          </li>
        );
      })} */}
    </nav>
  );
};

export default connect(

//   return a.reduce(function (p, c) {
//   if (p.indexOf(c) < 0) p.push(c);
//   return p;
// }, []);
  // (state, ownProps) => ({
  //   categories: state.data.pages && state.data.pages.reduce((p, c) => {
  //     if (p.indexOf(c) < 0) p.push(c);
  //     return p;
  //   }, [])
  // }),

  state => ({ categories: state.data.pages }),
  null
)(Header);