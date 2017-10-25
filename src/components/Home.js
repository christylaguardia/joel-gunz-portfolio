import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../data/portfolio.json';

export default function Home() {
  return (
    <div>
      <button className="button" onClick={() => toggleFilter()}>Advertising</button>
      <button className="button" onClick={() => toggleFilter()}>Creative</button>

      <ul>
        {portfolio.map(project => {
          return (
            <li key={project.id} data-category={project.category}>
              <Link to={`/${project.path}`}>
                {project.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function toggleFilter() {
  // do something
}