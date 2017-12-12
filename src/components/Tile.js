import React from 'react';
import { Link } from 'react-router-dom';

export default function Tile({ project, className }) {
  return (
    <div key={project.id}
      className={className}>
      {
        project.url
          ? <a href={project.url} target="_blank">{project.title}</a>
          : <Link to={`/${project.path}`}>{project.title}</Link>
      }
    </div>
  );
}
