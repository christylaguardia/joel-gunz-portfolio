import React from 'react';
import { Link } from 'react-router-dom';

export default function Tile({ project }) {
  return (
    <div key={project.sequence}>
      {project.url
        ? <a href={project.url} target="_blank">{project.title}</a>
        : <Link to={`/${project.path}`}>{project.title}</Link>
      }
    </div>
  );
}