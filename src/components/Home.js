import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../data/portfolio.json';

export default function Home() {
  return (
    <div>
      <ul>
        {portfolio.map(project => {
          return (
            <li key={project.id}>
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
