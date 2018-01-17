import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ projects }) {
  projects.sort((a, b) => a.sequence > b.sequence);
  console.log('projects', projects);
  
  return (
    <div>
      {projects.map(p => p.url
        ? <p key={p.sequence}><a href={p.url} target="_blank">{p.title}</a></p>
        : <p key={p.sequence}><Link to={`/${p.path}`}>{p.title}</Link></p>
      )}
    </div>
  );
}

export default Menu;