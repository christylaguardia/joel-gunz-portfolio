import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div>
      <p><Link to="/">Joel Gunz</Link></p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/login">Login</Link></p>
    </div>
  );
}

export default Categories;