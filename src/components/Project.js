import React from 'react';
import portfolio from '../data/portfolio.json';
console.log('portfolio in Project', portfolio);

export default function Project({ match }) {
  const path = match.params.id;
  const project = portfolio.filter(item => item.path === path);
  console.log('project in Project', project);
  const { title, subtitle, role, description, images, links } = project[0];
  
  return (
    <div>
      {project ? 'got it' : 'no project'}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{role}</h3>
      <p>{description}</p>
      {images
        ? images.map((image, index) => <img key={index} src={image} alt={`Number ${index}`} />)
        : null
      }
      {links
        ? <div>{links.map((link, index) => {
          return (
            <a key={index}
              className="button"
              href={link.address}
              target="_blank">
              {link.caption}
            </a>
          );
        })}
        </div>
        : null
      }
    </div>
  );
}
