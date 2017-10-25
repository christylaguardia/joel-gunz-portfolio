import React from 'react';
import portfolio from '../data/portfolio.json';

export default function Project({ match }) {
  const path = match.params.id;
  const project = portfolio.filter(item => item.path === path);
  const { title, subtitle, role, description, images, links } = project[0];
  
  return (
    <div>
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
