import React from 'react';

export default function Project(project) {
  const { title, subtitle, role, description } = project;
  
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  );
}